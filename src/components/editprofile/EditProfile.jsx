import { useForm } from "react-hook-form";
import React, { useRef, useState, useEffect } from 'react';
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./EditProfile.css";
import ARButton from "../ARButton/ARButton";
import Avatar from "@mui/material/Avatar";
import { getUserById, updateUser } from "../../api/userApi";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function EditProfile() {
  const [UserData, setUserData] = useState({
    firstName: "",
    lastName: "",
    link: "",
    description: "",
  });
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [state, setState] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { userId } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(userId);
        console.log(user);
        console.log(userId);
        setUserData(user);
        setValue("firstName", user.firstName);
        setValue("lastName", user.lastName);
        setValue("link", user.link);
        setValue("description", user.description);
        setState(user);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleFormSubmit = async (data) => {
    try {
      const updatedUser = {
        ...state,
        firstName: data.firstName,
        lastName: data.lastName,
        link: data.link,
        description: data.description,
      };
      const response = await updateUser(userId, updatedUser);
      console.log("User updated successfully:", response);
      navigate(`/FrontEnd-Areeq/seller/${userId}`);
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
 
  return (
    <div className=" container-edit m-auto my-4 myborder p-5 rounded">
      <h1>Edit Your Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="Avatar">
        <Avatar src="/broken-image.jpg" 
        />
        </div>
        <a className="A" href="#" onClick={handleUploadClick}>
          Change Your Picture
        </a>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
        />
        <div className="form-fields">
          <div className="form-field">
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <OutlinedInput
              fullWidth
              id="firstName"
              name="firstName"
              value={ UserData.firstName}
              {...register("firstName")}
              error={errors.firstName ? true : false}
              label="First Name"
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form-field">
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastName"
              name="lastName"
              value={UserData.lastName}
                            {...register("lastName")}
              error={errors.lastName ? true : false}
              label="Last Name"
            />
            {errors.lastName && (
              <span className="error-message">{errors.lastName.message}</span>
            )}
          </div>
          <div className="form-field">
            <InputLabel htmlFor="link">Social Link</InputLabel>
            <OutlinedInput
              fullWidth
              id="link"
              name="link"
              value={UserData.link }
               autoComplete="link"
              {...register("link", {
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Invalid link format",
                },
              })}
              error={errors.link ? true : false}
              label="Link"
            />
            {errors.link && (
              <span className="error-message">{errors.link.message}</span>
            )}
          </div>
          <div className="form-field">
            <InputLabel htmlFor="description">Description</InputLabel>
            <OutlinedInput
              fullWidth
              id="description"
              name="description"
              value={UserData.description}
              multiline
              rows={4}
              {...register("description")}
              error={errors.description ? true : false}
              label="Description"
            />
            {errors.description && (
              <span className="error-message">
                {errors.description.message}
              </span>
            )}
          </div>
        </div>
        <br></br>
        <div className="button">
          <ARButton text={"Save"} onClick={handleSubmit(handleFormSubmit)} />
          <br></br>
          <br></br>
          <Link to={`/FrontEnd-Areeq/ChangePassword/${userId}`}>
            <ARButton text={"Change Your Password"} />
          </Link>
        </div>
      </form>
    </div>
  );
}
export default EditProfile;
