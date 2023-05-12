import React from 'react';
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import "./EditProfile.css";
import Swal from "sweetalert2";
import ARButton from '../ARButton/ARButton';
import { updateUser } from "../../api/userApi";

function EditProfile(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  const onSubmit = async (data) => {
  try {
    data.photo = "photo";
    data.isAdmin = false;
    data.isSeller = true;
    const response = await updateUser(id, data); 
    if (response.status === 200) {
      console.log("Successfully updated user!");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User information updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log("Failed to update user");

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to update user information",
        text: response.error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } catch (error) {
    console.log("Failed to update user:", error);

    Swal.fire({
      position: "center",
      icon: "error",
      title: "An error occurred",
      text: "Failed to update user information",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
return(
<div className=" container m-5 myborder p-5 rounded">
          <h1>Edit Your Profil</h1>
<form>
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
            <br></br>
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
            <br></br>
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
<br></br>
            <FormControl sx={{ mt: 1, mb: 3 }}  variant="outlined" fullWidth>
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
            <br></br>
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
            <br></br>
            <ARButton text={"Save"} onClick={handleSubmit((data)=>onSubmit(data))}/>
            <br></br>
            <br></br>
            <ARButton text={"Change Your Password"} />
</form>
 </div>
)}
export default EditProfile;