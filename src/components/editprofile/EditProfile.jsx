import React,{ useEffect, useState, useRef } from 'react'; 
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import "./EditProfile.css";
import ARButton from '../ARButton/ARButton';
import Avatar from '@mui/material/Avatar';
import {getUserById} from '../../api/userApi';
import { useParams } from 'react-router';
function EditProfile(){
  const fileInputRef = useRef(null);
  const [state, setState] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {

        const response = await getUserById(userId)
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUserData();
    console.log(user);
  }, []);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosInstance.put(`/api/users/645b8f8c24f69785b8f2171f`, userData);
      console.log('User information updated successfully');
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('Uploaded file:', file);
  };

return(
<div className=" container m-5 myborder p-5 rounded">
          <h1>Edit Your Profil</h1>
<form onSubmit={handleFormSubmit}>
<div className='Avatar'>
  <Avatar
      size={150} 
      round={true} 
      src="https://thumbs.dreamstime.com/b/add-user-icon-vector-people-new-profile-person-illustration-business-group-symbol-male-195158118.jpg"
      alt="User Avatar" 
    /></div>
    <a className='A' href="#" onClick={handleUploadClick}>Change Your Picture</a>
    <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
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
            <div className='button'>
            <ARButton text={"Save"} onClick={handleSubmit((data)=>onSubmit(data))}/>
            <br></br>
            <br></br>
            <ARButton text={"Change Your Password"} /> </div>
</form>
 </div>
)}
export default EditProfile;