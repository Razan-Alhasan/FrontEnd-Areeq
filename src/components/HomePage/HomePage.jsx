import React from 'react';
import HeaderImg from './HeaderImg/HeaderImg';
import TopRate from './TopRate/TopRate'
import ShopBySeller from './ShopBySeller/ShopBySeller';
import Category from './ShopByCategory/ShopByCategory';
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