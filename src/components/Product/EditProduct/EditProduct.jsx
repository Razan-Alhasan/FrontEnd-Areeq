import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import ARButton from '../../ARButton/ARButton';
import MenuItem from '@mui/material/MenuItem';
import {
  getProductById,
  updateProduct
 
} from '../../../api/productsApi'; 
import './EditProduct.css';

const UpdateProduct = ({ productId }) => {
    const category = [
        {
          value: 'Clothes',
          label: 'Clothes',
        },
        {
          value: 'Soap',
          label: 'Soap',
        },
        {
          value: 'Accessories',
          label: 'Accessories',
        },
        {
          value: 'Ceramic',
          label: 'Ceramic',
        },
        {
          value: 'Home Decor',
          label: 'Home Decor',
        },
      ];
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    images: [],
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const product = await getProductById(productId);
        setProductData(product);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedProduct = await updateProduct(productId, productData);

      console.log('Product updated:', updatedProduct);

      setProductData({
        name: '',
        description: '',
        category: '',
        price: '',
        images: [],
      });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className='container'>
    <h1>Update Product </h1>
    <form onSubmit={handleSubmit}>
      

      
      <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          color="secondary"
          helperText="Please enter your product name"
          margin='normal'
          fullWidth
          value={productData.name}
          onChange={handleChange}
        />
      

      
      <TextField
          id="description"
          name="description"
          label="Description"
          type="text"
          color="secondary"
          helperText="Please enter your product description"
          margin='normal'
          fullWidth
          value={productData.description}
          onChange={handleChange}
        />
      

      
      <TextField
          id="category"
          name="category"
          select
          color="secondary"
          label="Category"
          helperText="Please select your product category"
          fullWidth
          margin='normal'
          value={productData.category}
          onChange={handleChange}
        >
          {category.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
         </TextField>
      
        <TextField
          id="price"
          name="price"
          label="Price"
          type="number"
          color="secondary"
          helperText="Please enter your product price"
          margin='normal'
          fullWidth
          value={productData.price}
          onChange={handleChange}
        />
      
       
      

      <ARButton text="Update" type="submit" onClick={handleSubmit}/> 
    </form>
    </div>
  );
};

export default UpdateProduct;
