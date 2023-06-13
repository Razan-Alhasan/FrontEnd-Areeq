import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./ChangePassword.css";
import "sweetalert2/dist/sweetalert2.min.css";
import InputAdornment from "@mui/material/InputAdornment";
import ARButton from "../ARButton/ARButton";
import { getUserById, updateUser } from "../../api/userApi";
import { useParams, useNavigate } from "react-router";

function ChangePassword() {
  const navigate = useNavigate();
  const [showpassword, setShowpassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [state, setState] = useState({});
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { userId } = useParams();
  const password = useRef({});
  password.current = watch("password", "");

  useEffect(() => {
    console.log("userId:", userId);
    const fetchUser = async () => {
      try {
        const user = await getUserById(userId);
        setValue("password", user.password);
        setState(user);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [userId, setValue]);

  const handleClickshowpassword = () => {
    setShowpassword(!showpassword);
  };
  const handleMouseDownshowpassword = (event) => {
    event.preventDefault();
  };
  const handleClickshowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleMouseDownshowNewPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  const validateConfirmPassword = (value) => {
    const newPassword = watch("newPassword");
    return value === newPassword || "Passwords do not match";
  };

  const handleFormSubmit = async (data) => {
    try {
      const storedPassword = localStorage.getItem("password"); 
      if (storedPassword !== data.password) {
        console.log("Incorrect password");
        return;
      }

      const updatedUser = {
        ...state,
        password: data.newPassword,
      };
      const response = await updateUser(userId, updatedUser); 
      console.log("Password changed successfully:", response);
      navigate(`/FrontEnd-Areeq/seller/${userId}`);
    } catch (error) {
      console.log("Error changing password:", error);
    }
  };

  return (
    <div className="chpass">
      <div className=" container-change m-5 myborder p-5 rounded">
        <h1>Change your password</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <FormControl variant="outlined" fullWidth>
            <TextField
              id="outlined-adornment-password"
              label="password"
              name="password"
              variant="outlined"
              margin="normal"
              type={showpassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickshowpassword}
                      onMouseDown={handleMouseDownshowpassword}
                      edge="end"
                    >
                      {showpassword ? <VisibilityOff /> : <Visibility />}
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
              id="outlined-adornment-new-password"
              label="New Password"
              name="newPassword"
              variant="outlined"
              margin="normal"
              type={showNewPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle New Password visibility"
                      onClick={handleClickshowNewPassword}
                      onMouseDown={handleMouseDownshowNewPassword}
                      edge="end"
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("newPassword", {
                required: "New Password is required",
                minLength: {
                  value: 6,
                  message: "New Password must be at least 6 characters",
                },
              })}
              error={errors.newPassword ? true : false}
              helperText={
                errors.newPassword ? errors.newPassword.message : ""
              }
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <TextField
              id="outlined-adornment-confirm-password"
              label="Confirm New Password"
              name="confirmPassword"
              variant="outlined"
              margin="normal"
              type={showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle Confirm Password visibility"
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
                minLength: {
                  value: 6,
                  message: "Confirm Password must be at least 6 characters",
                },
                validate: validateConfirmPassword,
              })}
              error={errors.confirmPassword ? true : false}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : ""
              }
            />
          </FormControl>
          <br></br>
          <br></br>
          <ARButton
            text={"Save"}
            onClick={handleSubmit(handleFormSubmit)}
          />
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
