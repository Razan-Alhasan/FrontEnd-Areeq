import React from 'react';
import { useForm,useEffect } from "react-hook-form";
// import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import "./EditProfile.css";
// import Swal from "sweetalert2";
import ARButton from '../ARButton/ARButton';
// import { updateUser } from "../../api/userApi";
import Avatar from "react-avatar";
// import { Link } from 'react-router-dom';

function EditProfile(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = `/api/users/${userId}`;
        const response = await axios.get(`/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUserData();
  }, []);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const userId = `/api/users/${userId}`;
      await axios.post(`/api/users/${userId}`, user);
      console.log('User information updated successfully');
    } catch (error) {
      console.error('Failed to update user:', error);
    }
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
    <a className='A' href="https://www.example.com">Change Your Picture</a>
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