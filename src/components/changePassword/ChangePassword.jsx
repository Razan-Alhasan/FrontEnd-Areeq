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
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setPasswordData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
    
    const handleFormSubmit = async (data) => {
      try {
        const updatedUser = {
          ...state,
          password: data.password,
        };
        const response = await updateUser(userId, updatedUser);
        console.log("User updated successfully:", response);
        navigate(`/FrontEnd-Areeq/seller/${id}`)
      } catch (error) {
        console.log("Error updating user:", error);
      }
    };

  return (
    <div className=" container-change m-5 myborder p-5 rounded">
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
          onClick={ handleSubmit(handleFormSubmit) }
        />
      </form>
    </div>
  );
}
export default ChangePassword;
