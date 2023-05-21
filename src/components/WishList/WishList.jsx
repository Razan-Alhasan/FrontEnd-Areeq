import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getProductById } from '../../api/productsApi'
import ImagesList from '../ImageList/ImagesList';

const WishList = () => {
    const [cookies] = useCookies(['favorites']);
    console.log('cookies.favorites:', cookies.favorites); // Check the value of cookies.favorites

    const favorites = cookies.favorites || [];
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const fetchFavoriteProducts = async () => {
            const favoriteProductsId = favorites.map(productId => getProductById(productId));
            const favoriteProductsData = await Promise.all(favoriteProductsId);
            setFavoriteProducts(favoriteProductsData);
        };

        fetchFavoriteProducts();
    }, [favorites]);

    return (
        <div>
            <ImagesList header={ "WishList" } rule={ favoriteProducts.images } products={ favoriteProducts } />
        </div>
    );
};

export default WishList;
