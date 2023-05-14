import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./SellerSignUp.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { createUser } from "../../api/userApi";
import ARButton from "../ARButton/ARButton";
import InputAdornment from "@mui/material/InputAdornment";
import Swal from "sweetalert2";
//  import uploadImage from '../../utils/cloudinaryUtils'

function SellerSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = async (data) => {
    try {
      data.photo = "photo";
      data.isAdmin = false;
      data.isSeller = true;
      const token = await createUser(data);
      localStorage.setItem("token", JSON.stringify(token));
      console.log("Successfully created user!");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You have signed up successfuly",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log("Failed to creat user:", error);
    }
  };
  return (
    <div className=" container m-5 myborder p-5 rounded">
      <h1>Seller Sign Up</h1>
      <form>
        <TextField
          fullWidth
          id="firstName"
          label="firstName"
          name="firstName"
          variant="outlined"
          margin="normal"
          {...register("firstName", {
            required: "firstName is required",
          })}
          error={errors.firstName ? true : false}
          helperText={errors.firstName ? errors.firstName.message : ""}
        />
        <TextField
          fullWidth
          id="lastName"
          label="lastName"
          name="lastName"
          variant="outlined"
          margin="normal"
          {...register("lastName", {
            required: "lastName is required",
          })}
          error={errors.lastName ? true : false}
          helperText={errors.lastName ? errors.lastName.message : ""}
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          variant="outlined"
          margin="normal"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email format",
            },
          })}
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : ""}
        />
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="outlined-adornment-password"
            label="Password"
            name="password"
            variant="outlined"
            margin="normal"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : ""}
          />
        </FormControl>

        <FormControl variant="outlined" fullWidth>
          <TextField
            id="outlined-adornment-confirm-password"
            label="Confirm Password"
            name="confirmPassword"
            variant="outlined"
            margin="normal"
            type={showConfirmPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
            error={errors.confirmPassword ? true : false}
            helperText={
              errors.confirmPassword ? errors.confirmPassword.message : ""
            }
          />
        </FormControl>

        <TextField
          fullWidth
          id="link"
          label="Link"
          name="link"
          autoComplete="link"
          variant="outlined"
          margin="normal"
          {...register("link", {
            required: "Link is required",
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: "Invalid link format",
            },
          })}
          error={errors.link ? true : false}
          helperText={errors.link ? errors.link.message : ""}
        />
        <FormControl variant="outlined" fullWidth>
          <TextField
            id="image"
            label="Image"
            name="image"
            variant="outlined"
            margin="normal"
            type="file"
            error={errors.image ? true : false}
            helperText={errors.image ? errors.image.message : ""}
          />
        </FormControl>
        <TextField
          fullWidth
          id="description"
          label="Description"
          name="description"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          {...register("description", {
            required: "Description is required",
          })}
          error={errors.description ? true : false}
          helperText={errors.description ? errors.description.message : ""}
        />
        <ARButton
        className="button"
          text={"join our family"}
          onClick={handleSubmit((data) => onSubmit(data))}
        />
      </form>
    </div>
  );
}
export default SellerSignUp;
