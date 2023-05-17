import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "sweetalert2/dist/sweetalert2.min.css";
import ARButton from "../ARButton/ARButton";
import "./RateReview.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
// import Swal from "sweetalert2";
// import { createReview } from "../../api/reviewsApi";
import { Icon } from "@mui/material";

const RateReview = () => {
    const [value, setValue] = useState(3);
  const [hover, setHover] = useState(-1);
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const handleSubmit = (data) => {
    console.log(data);
  };
//   const onSubmit = async (data) => {
//     try{
//         const token = await createReview(data);
//         localStorage.setItem("token", JSON.stringify(token));
//         console.log("Successfuly Created Review!");
//         Swal.fire({
//             position: "center",
//             icon: "success",
//             title: "You have created review successfuly",
//             showConfirmButton: false,
//             timer: 1500,
//         });
//     }catch (err){
//         console.log("Failed to create review:", err);
//     }
//   };
  return (
    <div className=" container m-5 myborder p-5 rounded">
      <h1>Your Rate Mean A Lot For Us! </h1>
      <p>*IT INCREASES THE RELIABILITY OF OUR SITE </p>
      <h2>RATE:</h2>
      <Rating
        name="hover-feedback"
       value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon className="icon" style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box  sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      <h2>REVIEW:</h2>
      <TextField id="review" label="review" variant="outlined" />
      <br></br>
      <br></br>
      <ARButton
        className="button"
          text={"Send"}
          onClick={() => handleSubmit((data) => onSubmit(data))}
        />
    </div>
  );
};

export default RateReview;
