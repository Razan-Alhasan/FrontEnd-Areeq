import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faTimes } from "@fortawesome/free-solid-svg-icons";
import './Discount.css';
import { getDiscounts } from '../../api/discountApi';

const Discount = ({ product }) => {
    const [showWindow, setShowWindow] = useState(false);
    const [discount, setDiscount] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDiscounts();
            const filteredData = data.filter((mydiscount) => {
                return mydiscount.offer && mydiscount.offer._id === (product && product.offer && product.offer._id);
            });
            setDiscount(filteredData);
            console.log(filteredData);
        };
        fetchData();
    }, []);
    const handleDiscountClick = () => {
        setShowWindow(!showWindow);
    };
    const currentDate = new Date();
    const endDate = new Date(product.offer.endDate);
    return (
        <div>
            { product && product.offer && (endDate > currentDate) && (
                <div className="discount-btn" onClick={ handleDiscountClick }>
                    <FontAwesomeIcon icon={ faBolt } />
                    <span>{ product.offer.value }</span>
                </div>
            ) }

            { showWindow && (
                <div className="discount-window">
                    <>
                        <FontAwesomeIcon
                            icon={ faTimes }
                            className="close-icon"
                            onClick={ handleDiscountClick }
                        />
                        <p className='p-code'>Save the code now!<br></br>to win the discount!</p>
                        <span className='code'>Code:{discount[0].code }</span>
                    </>
                </div>
            ) }
        </div>
    );
};

export default Discount;
