import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../api/productsApi';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
const RelatedItems = (props) => {
    const currentProduct = props.product; 
    const [relatedProducts, setRelatedProducts] = useState([]);


    useEffect(() => {
        if (currentProduct) {
            // console.log(currentProduct)
            const { category } = currentProduct;
            console.log(category)
            const fetchRelatedProducts = async () => {
                const relatedProductsData = await getProducts({category: category});
                console.log(relatedProductsData);
                const filteredRelatedProducts = relatedProductsData.filter(
                    (product) => product._id !== currentProduct._id
                );
                const data = filteredRelatedProducts.slice(0, 4);
                setRelatedProducts(data);
            };
            fetchRelatedProducts();
        }
    }, [currentProduct]);
    if (!currentProduct) {
        return <div>Loading...</div>;
    }
    return (
        <div className="related-products">
            <h2>Related products</h2>
            <div className='card-flex row'>
                { relatedProducts.map((product) => (
                    <Card key={ product.id } style={ { margin: '2%' } } className='col-md-2 col col-5'>
                        <Link to={ `/FrontEnd-Areeq/product/${product._id}` }>
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

export default RelatedItems;
