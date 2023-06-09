import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './AddProduct.css';
import ARButton from '../../ARButton/ARButton';
import React from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useForm } from 'react-hook-form';
import { createProduct } from '../../../api/productsApi'


function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const product = await createProduct(data);
      console.log('Successfully created product:', product);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You have created product successfuly",
        showConfirmButton: false,
        timer: 20000,
      });
    } catch (error) {
      console.log("Failed to created product:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "There is an error",
        showConfirmButton: false,
        timer: 20000,
      });
    }
  };




  const category = [
    {
      name: 'Clothes',
      value: 'Clothes',
      label: 'Clothes',
    },
    {
      name: 'Soap',
      value: 'Soap',
      label: 'Soap',
    },
    {
      name: 'Accessories',
      value: 'Accessories',
      label: 'Accessories',
    },
    {
      name: 'Ceramic',
      value: 'Ceramic',
      label: 'Ceramic',
    },
    {
      name: 'Home Decor',
      value: 'Home Decor',
      label: 'Home Decor',
    },
  ];

  return (
    <div className='container-s'>
      <h1>Add Product</h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <TextField
          fullWidth
          id="name"
          label="Name"
          name="name"
          color="secondary"
          margin="normal"

          { ...register("name", {
            required: "Name is required",
          }) }
          error={ errors.name ? true : false }
          helperText={ errors.name ? errors.name.message : "" }
        />

        <TextField
          fullWidth
          id="price"
          label="Price"
          name="price"
          color="secondary"
          margin="normal"
          type="number"
          inputProps={{ min: "0" }}

          { ...register("price", {
            required: "Price is required",
            min: {
              value: 0,
              message: "Price must be a positive number",
            },
          }) }
          error={ errors.price ? true : false }
          helperText={ errors.price ? errors.price.message : "" }
        />

        <TextField
          fullWidth
          id="description"
          label="Description"
          name="description"
          color="secondary"
          margin="normal"
          multiline
          rows={ 2 }

          { ...register("description", {
            required: "description is required",
          }) }
          error={ errors.description ? true : false }
          helperText={ errors.description ? errors.description.message : "" }
        />

        <TextField
          id="category"
          name="category"
          select
          color="secondary"
          label="Category"
          fullWidth
          margin="normal"
          {...register("category", {
            required: "Please select a category",
          })}
          error={errors.category ? true : false}
          helperText={errors.category ? errors.category.message : ""}
        >
          {category.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          )) }
        </TextField>

        <TextField
          fullWidth
          id="images"
          name="images"
          variant="outlined"
          margin="normal"
        />
        <div className="button-add">
          <ARButton text="Add Product" onClick={handleSubmit((data) => onSubmit(data))} /></div>
      </form>
    </div>
  );
}


export default AddProduct;
