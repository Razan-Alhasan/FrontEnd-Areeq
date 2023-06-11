import TextField from '@mui/material/TextField';
import ARButton from '../ARButton/ARButton';
import React from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useForm } from 'react-hook-form';
import { createDiscount } from '../../api/discountApi';
import './AddDiscount.css';


function AddDiscount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      
      const discount = await createDiscount(data);
      console.log("Successfully created discount!",discount);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You have created discount successfuly",
        showConfirmButton: false,
        timer: 20000,
      });
    } catch (error) {
      console.log("Failed to created discount:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "There is an error",
        showConfirmButton: false,
        timer: 20000,
      });
    }
  };



  return (
    <div className='container-t'>
      <h1>Add Discount</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <TextField
          fullWidth
          id="code"
          name="code"
          label="Discount code"
          color="secondary"
          margin="normal"
          

          {...register("code", {
            required: "code is required",
           
          })}
          error={errors.code ? true : false}
          helperText={errors.code ? errors.code.message : ""}
        />


        
        
<div className="button-discount">
        <ARButton text="Add Discount" onClick={handleSubmit((data) => onSubmit(data))} /></div>
        
      </form>
    </div>
  );
}


export default AddDiscount;