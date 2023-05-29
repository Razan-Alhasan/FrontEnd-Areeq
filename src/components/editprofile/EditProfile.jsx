import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import "./EditProfile.css";
import ARButton from "../ARButton/ARButton";
import Avatar from "@mui/material/Avatar";
import { getUserById, updateUser } from "../../api/userApi";
import { useParams } from "react-router";

function EditProfile() {
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
        const user = await getUserById( userId );
        setValue("firstName", user.firstName);
        setValue("lastName", user.lastName);
        setValue("email", user.email);
        setValue("link", user.link);
        setValue("description", user.description);
        setState(user);
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [userId, setValue]);

  const handleFormSubmit = async (data) => {
    try {
      const updatedUser = {
        ...state,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        link: data.link,
        description: data.description,
      };
      const response = await updateUser(userId, updatedUser);
      console.log("User updated successfully:", response);
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
  };

  return (
    <div className=" container-edit m-5 myborder p-5 rounded">
      <h1>Edit Your Profil</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="Avatar">
        <Avatar
  size={150}
  round="true" 
  src="https://thumbs.dreamstime.com/b/add-user-icon-vector-people-new-profile-person-illustration-business-group-symbol-male-195158118.jpg"
  alt="User Avatar"
/>
        </div>
        <a className="A" href="#" onClick={handleUploadClick}>
          Change Your Picture
        </a>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <TextField
          fullWidth
          id="firstName"
          label="firstName"
          name="firstName"
          variant="outlined"
          margin="normal"
          {...register("firstName")}
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
          {...register("lastName")}
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
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email format",
            },
          })}
          error={errors.email ? true : false}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          fullWidth
          id="link"
          label="Link"
          name="link"
          autoComplete="link"
          variant="outlined"
          margin="normal"
          {...register("link", {
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: "Invalid link format",
            },
          })}
          error={errors.link ? true : false}
          helperText={errors.link ? errors.link.message : ""}
        />
        <TextField
          fullWidth
          id="description"
          label="Description"
          name="description"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          {...register("description")}
          error={errors.description ? true : false}
          helperText={errors.description ? errors.description.message : ""}
        />
        <div className="button">
          <ARButton
            text={"Save"}
            onClick={handleSubmit(handleFormSubmit)}
          />
          <br></br>
          <br></br>
          <ARButton text={"Change Your Password"} />{" "}
        </div>
      </form>
    </div>
  );
}
export default EditProfile;
