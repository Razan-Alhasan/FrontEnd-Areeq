import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getProductById } from '../../api/productsApi';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Discount from '../Discount/Discount';
const WishList = () => {
    const [cookies] = useCookies(['favorites']);
    console.log('cookies.favorites:', cookies.favorites); // Check the value of cookies.favorites

    const favorites = cookies.favorites || [];
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const fetchFavoriteProducts = async () => {
            const favoriteProductsId = favorites.map(productId => getProductById(productId));
            console.log(favoriteProductsId);
            const favoriteProductsData = await Promise.all(favoriteProductsId);
            console.log(favoriteProductsData);
            setFavoriteProducts(favoriteProductsData);
        };

        fetchFavoriteProducts();
    }, [favorites]);

    return (
        < div >
            <h1>Welcome to WishList</h1>
            <ImageList sx={ { width: '90%', height: '100%' } } cols={ 5 } className='image-list'>
                { favoriteProducts ? (
                    favoriteProducts.map((product) => (
                        <ImageListItem key={ product._id } className='image-item'>
                            <Link to={ `/FrontEnd-Areeq/product/${product._id}` } key={ product._id }>
                                <img
                                    src={ `${product.images[0]}?w=164&h=164&fit=crop&auto=format` }
                                    srcSet={ `${product.images[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
                                    alt={ product.name }
                                />
                            </Link>
                                <div className="info-img">
                                    <h3 className='title'>{ product.name }</h3>
                                    <p className='price'>{ product.price } nis</p>
                                </div>
                            { product && product.offer && (
                                <div className="discount-seller-btn">
                                    <Discount product={ product } />
                                </div>
                            ) }
                        </ImageListItem>

                    ))
                ) : (
                    <Loading />
                ) }
            </ImageList>
        </div >
    );
};

export default WishList;
