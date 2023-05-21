import React from "react";
import { useForm } from 'react-hook-form';
import ARButton from "../ARButton/ARButton";
import "./AddOffer.css";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, InputLabel } from '@material-ui/core';


const AddOffer = () => {
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      // Handle form submission
      console.log(data);
    };

  return (
    <div className=" container m-5 myborder p-5 rounded">
      <h1>ADD OFFER</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
<div>
<FormControl>
<InputLabel id="demo-simple-select-label">Add Offer</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={value}
    label="value"
    onChange={handleChange}
  >
             <MenuItem value={10}>10%</MenuItem>
          <MenuItem value={15}>15%</MenuItem>
          <MenuItem value={20}>20%</MenuItem>
          <MenuItem value={25}>25%</MenuItem>
          <MenuItem value={30}>30%</MenuItem>
          <MenuItem value={35}>35%</MenuItem>
          <MenuItem value={40}>40%</MenuItem>
  </Select>
  {errors.values && <span>This field is required</span>}
  </FormControl>
  </div>

  <div>
          <label>Start Date:</label>
          <input type="date" {...register('startDate', { required: true })} />
          {errors.startDate && <span>This field is required</span>}
        </div>

        <div>
          <label>End Date:</label>
          <input type="date" {...register('endDate', { required: true })} />
          {errors.endDate && <span>This field is required</span>}
        </div>

      <br></br>
      <br></br>
      <ARButton
        className="button"
          text={"Send"}
          type="submit"
        />
        </form>
    </div>
  );
};

export default AddOffer;
