import TextField from '@mui/material/TextField';
import ARButton from '../ARButton/ARButton';
import React from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useForm } from 'react-hook-form';
import { createOffer } from '../../api/offerApi';
import './AddOffer.css';

function AddOffer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      
      const token = await createOffer(data);
      localStorage.setItem("token", JSON.stringify(token));
      
      console.log("Successfully created offer!");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You have created offer successfuly",
        showConfirmButton: false,
        timer: 20000,
      });
    } catch (error) {
      console.log("Failed to created offer:", error);
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
      <h1>Add Offer</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <TextField
          fullWidth
          id="startDate"
          name="startDate"
          color="secondary"
          margin="normal"
          type="date" 

          {...register("startDate", {
            required: "startDate is required",
           
          })}
          error={errors.startDate ? true : false}
          helperText={errors.startDate ? errors.startDate.message : ""}
        />

<TextField
          fullWidth
          id="endDate"
          name="endDate"
          color="secondary"
          margin="normal"
          type="date" 

          {...register("endDate", {
            required: "endDate is required",
           
          })}
          error={errors.endDate ? true : false}
          helperText={errors.endDate ? errors.endDate.message : ""}
        />
        <TextField
          fullWidth
          id="value"
          label="Value"
          name="value"
          color="secondary"
          margin="normal"

          {...register("value", {
            required: "value is required",
           
          })}
          error={errors.value ? true : false}
          helperText={errors.value ? errors.value.message : ""}
        />

        
        

        <ARButton text="Add Offer" onClick={handleSubmit((data) => onSubmit(data))} />
      </form>
    </div>
  );
}


export default AddOffer;