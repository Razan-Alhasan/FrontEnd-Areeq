import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { getProductById } from '../../api/productsApi';
import { Link, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Review from './Review/Review';
import Discount from '../Discount/Discount';
import Loading from '../Loading/Loading';
import RelatedItems from './RelatedItems/RelatedItems';
const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [cookies, setCookie] = useCookies(['favorites']);
    const { productId } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProductById(productId);
            console.log(data);
            setProduct(data);
        };
        fetchData();
    }, []);
    const handleFavoriteClick = () => {
        if (product) {
            const favorites = cookies.favorites || [];
            let updatedFavorites = Array.isArray(favorites) ? favorites : [];

            if (!updatedFavorites.includes(productId)) {
                const newFavorites = [...updatedFavorites, productId];
                setCookie('favorites', newFavorites, { path: '/' });
                console.log(productId + ' added to favorites');
            } else {
                console.log(productId + ' is already in favorites');
            }
        }
    };

    if (!product) {
        return <Loading/>
    }
    return (
        <div>
            {/* <Link to="/product/edit"> */ }
            <div>
                { product.user && product.user.isSeller && (
                    <div className="edit-icon">
                        <FontAwesomeIcon icon={ faPenToSquare } style={ { color: "#562b08" } } />
                    </div>
                ) }
            </div>
            {/* </Link> */ }
            <div className='images'>
                <div className='vertical-image '>
                    <div className='vert-imgs'>
                    <img src={ product.images[1] } />
                    <img src={ product.images[2] } />
                    <img src={ product.images[3] } />
                    </div>
                    <div className="wish" onClick={ handleFavoriteClick }>
                        <FontAwesomeIcon icon={ faHeart } className='wishlist' />
                        <span className='wishlist-text'> Add to wishlist</span>
                    </div>
                </div>
                <div className='base-image '>
                    <img src={ product.images[0] } />
                    <div className="info-base">
                        <h2>{ product.name }</h2>
                        <p>{ product.price } nis</p>
                    </div>
                </div>
            </div>
            { product && product.offer && (
                <div className="discount-product">
                    <Discount product={ product } />
                </div>
            ) }

            <div className="description-prod">
                <p>{ product.description } </p>
            </div>
            <div className="related-item">
                <RelatedItems product={ product } />
            </div>
            <div className="reviews">
                <Review product={ product } />
            </div>
            <Link to={ `/FrontEnd-Areeq/review/${product._id}`}> 
                <div className="feedback">
                    <img src="../../feedback.png" alt="feedback" />
                </div>
            </Link>
        </div>

    );

};

export default ProductPage;
