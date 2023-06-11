import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './ThreePoint.css';
import { Link } from 'react-router-dom';
import {changeArchiveStatus} from '../../../api/productsApi'


const OptionsDropdown = ({product}) => {
    
    
    
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  


const toggleDropdown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    clearTimeout(timeoutRef.current);
  };

  const handleArchive = async () => {
    try {
      await changeArchiveStatus(product._id, true);
      console.log('Product archived successfully');
    } catch (error) {
      console.error('Error archiving the product:', error);
    }
  };
  
    

 
  return (
    <div className="options-dropdown">
      <FontAwesomeIcon
        icon={faEllipsisV}
        className="options-icon"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-menu">
          <Link to ={`/FrontEnd-Areeq/home`}>Edit</Link>
          <Link to ={`/FrontEnd-Areeq/addOffer`}> Add Offer</Link>
          <button onClick={handleArchive}>Archive</button>
        </div>
      )}
    </div>
  );
};

export default OptionsDropdown;
