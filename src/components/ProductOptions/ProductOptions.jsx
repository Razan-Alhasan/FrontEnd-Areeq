import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductOptions = ({ productId, handleEditProduct, handleArchiveProduct }) => {
    const [showOptions, setShowOptions] = useState(!true);
  
    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };
    
    return (
       
      <Dropdown>
        <Dropdown.Toggle variant="none" id="dropdown-options" onClick={toggleOptions} />
        <Dropdown.Menu show={showOptions}>
          <Dropdown.Item onClick={() => handleEditProduct(productId)}> Edit Product</Dropdown.Item>
          <Dropdown.Item onClick={() => handleArchiveProduct(productId)}>Archive Product </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  
  export default ProductOptions;
  