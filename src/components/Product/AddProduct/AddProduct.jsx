import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './AddProduct.css';
import ARButton from '../../ARButton/ARButton';
import { createProduct } from '../../../api/productsApi';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function AddProduct() {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    images: null
  });
 
  const handleImageChange = (event) => {
    setProduct({
      ...product,
      images: [...event.target.files],
    });
  };
  
  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(product);
      console.log('Product added successfully!');
      Swal.fire({
        position: "center",
        icon: "success",
        title: "product created successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      setProduct({
        name: '',
        description: '',
        category: '',
        price: '',
        images: null
      });
    } catch (error) {
      console.error('Error adding product:', error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to add product",
        text: response.error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    }
  

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

  return (
    <div className='container'>
      <h1>Add Product</h1>
      <form onSubmit={handleFormSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          color="secondary"
          fullWidth
          {...register("name")}
          error={errors.name ? true : false}
          helperText={errors.name ? errors.name.message : ""}     
          margin='normal'
          value={product.name}
          onChange={handleInputChange}
        />
        <TextField
          id="price"
          name="price"
          label="Price"
          type="number"
          color="secondary"
          helperText="Please enter your product price"
          margin='normal'
          fullWidth
          value={product.price}
          onChange={handleInputChange}
        />
        <TextField
          id="description"
          name="description"
          label="Description"
          color="secondary"
          helperText="Please enter your product description"
          margin='normal'
          fullWidth
          value={product.description}
          onChange={handleInputChange}
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
          value={product.category}
          onChange={handleInputChange}
        >
          {category.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
        type="file" 
        fullWidth
        margin='normal'
        multiple onChange={handleImageChange} /> 
        <ARButton text="Add Product" type="submit" onClick={handleFormSubmit}/>
      </form>
    </div>
  );}


export default AddProduct;
