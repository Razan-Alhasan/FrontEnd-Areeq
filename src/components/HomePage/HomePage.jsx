import React from 'react';
import HeaderImg from './HeaderImg/HeaderImg';
import TopRate from './TopRate/TopRate'
import ShopBySeller from './ShopBySeller/ShopBySeller';
import Category from './ShopByCategory/ShopByCategory';
import './HomePage.css';
const HomePage = () => {
    return (
        <div>
            <HeaderImg />
            <TopRate />
            <Category/>
            <ShopBySeller/>
        </div>
    );
};

export default HomePage;