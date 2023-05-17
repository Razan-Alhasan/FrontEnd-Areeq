import React, { useState } from "react";
import "sweetalert2/dist/sweetalert2.min.css";
import ARButton from "../ARButton/ARButton";
import "./RateReview.css";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const AddOffer = () => {
 

  return (
    <div className=" container m-5 myborder p-5 rounded">
      <h1>ADD OFFER</h1>
    
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
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
</FormControl>
      <br></br>
      <br></br>
      <ARButton
        className="button"
          text={"Send"}
        />
    </div>
  );
};

export default AddOffer;
