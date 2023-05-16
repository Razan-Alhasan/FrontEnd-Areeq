import React, { useState,useEffect } from "react";
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
import axios from 'axios';
import ARButton from "../ARButton/ARButton";

function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const handleClickshowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const handleMouseDownshowCurrentPassword = (event) => {
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
    const newPassword = getValues("newPassword");
    return value === newPassword || "Passwords do not match";
  };
    const [user, setUser] = useState(null);
    const [passwordData, setPasswordData] = useState({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    // const id =`/api/users/${id}`;
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`/api/users/${id}`);
          setUser(response.data);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      };
      fetchUserData();
    }, []);
  
    const handleChangePassword = async () => {
      try {
        await changePassword(id, passwordData.currentPassword, passwordData.newPassword);
        console.log('Password updated successfully');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      } catch (error) {
        console.error('Failed to update password:', error);
      }
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      handleChangePassword();
    };
  
    const handleInputChange = (event) => {
      setPasswordData({
        ...passwordData,
        [event.target.name]: event.target.value,
      });
    };
  return (
    <div className=" container m-5 myborder p-5 rounded">
      <h1>Change your password</h1>
      <form onSubmit={handleFormSubmit}>
        <FormControl  variant="outlined" fullWidth>
          <TextField
            id="outlined-adornment-password"
            label="Current Password"
            name="Current Password"
            variant="outlined"
            margin="normal"
            type={showCurrentPassword ? "text" : "Current Password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle Current Password visibility"
                    onClick={handleClickshowCurrentPassword}
                    onMouseDown={handleMouseDownshowCurrentPassword}
                    edge="end"
                  >
                    {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("Current Password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.CurrentPassword ? true : false}
            helperText={
              errors.CurrentPassword ? errors.CurrentPassword.message : ""
            }
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl  variant="outlined" fullWidth>
          <TextField
            id="outlined-adornment-confirm-password"
            label="New Password"
            name="New Password"
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
            {...register("NewPassword", {
              required: "New Password is required",
              minLength: {
                value: 6,
                message: "New Password must be at least 6 characters",
              },
            })}
            error={errors.NewPassword ? true : false}
            helperText={errors.NewPassword ? errors.NewPassword.message : ""}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl  variant="outlined" fullWidth>
          <TextField
            id="ConfirnNewPassword"
            label="Confirn New Password"
            name="Confirn New Password"
            variant="outlined"
            margin="normal"
            type={showConfirmPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle Confirn Password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("ConfirmPassword", {
              required: " Confirm  Password is required",
              minLength: {
                value: 6,
                message: " Confirm New Password must be at least 6 characters",
              },
              validate: validateConfirmPassword,
            })}
            error={errors.ConfirnNewPassword ? true : false}
            helperText={
              errors.ConfirnNewPassword ? errors.ConfirnNewPassword.message : ""
            }
            onChange={handleInputChange}
          />
        </FormControl>
        <br></br>
        <br></br>
        <ARButton
          text={"Save"}
          onClick={handleSubmit((data) => onSubmit(data))}
        />
      </form>
    </div>
  );
}
export default ChangePassword;
