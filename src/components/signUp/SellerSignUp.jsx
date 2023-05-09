import React from "react";
import { useForm } from "react-hook-form";
import  { useRef } from 'react';
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./SellerSignUp.css";
import { useNavigate } from "react-router-dom";
/*import { createUser } from "../../api/userApi";*/
/*import ARButton from '../../components/ARButton/ARButton';*/

function SellerSignUp() {
  const password = useRef({});
  password.current = watch("password", "");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const token = await createUser("/api/users", data);
      localStorage.setItem("token", JSON.stringify(token));
      console.log("Successfully created user!");
      navigate("/");
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
    <div className="container container-fluid ">
      <div className=" container d-flex justify-content-center">
        <div className=" container w-50 m-5 myborder p-5 rounded">
          <h1>Seller Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              name="name"
              variant="outlined"
              margin="normal"
              {...register("name", {
                required: "Name is required",
              })}
              error={errors.name ? true : false}
              helperText={errors.name ? errors.name.message : ""}
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
            <FormControl sx={{ mt: 1, mb: 3 }} fullWidth variant="outlined">
              <TextField
                id="outlined-adornment-password"
                fullWidth
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

            <FormControl sx={{ mt: 1, mb: 3 }} fullWidth variant="outlined">
              <TextField
                id="outlined-adornment-confirm-password"
                fullWidth
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
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
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

            <FormControl sx={{ mt: 1, mb: 3 }} fullWidth variant="outlined">
              <TextField
                id="image"
                fullWidth
                label="Image"
                name="image"
                variant="outlined"
                margin="normal"
                type="url"
                {...register("image", {
                  required: "Image is required",
                  pattern: {
                    value: /\.(gif|jpe?g|png)$/i,
                    message:
                      "Invalid image format (only .gif, .jpeg, .jpg, .png allowed)",
                  },
                })}
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
            <Button className="button" variant="primary" type="submit">
              Join Our Family
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SellerSignUp;
