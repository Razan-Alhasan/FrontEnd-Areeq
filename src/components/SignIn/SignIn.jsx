import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './SignIn.css';
import { login } from '../../api/userApi';
import ARButton from '../ARButton/ARButton';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../api/userApi';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            // localStorage.removeItem('token');
            // localStorage.removeItem('userId');
            // const res = await login(data.email, data.password);
            console.log(data);
            const {token, userId} = await login(data.email, data.password);
            // console.log(res);
            // const token = res.token;
            // const userId = res.userId;
            localStorage.setItem('userId', userId);
            // console.log("user:" , res.userId);
            localStorage.setItem('token', token);
            const user = await getUserById(userId);
            console.log("user: ", user);
            console.log('Successfully logged in!');
            if (user.isAdmin) {
                navigate(`/FrontEnd-Areeq/admin`);
            }
            else {
                navigate(`/FrontEnd-Areeq/home`);
            }
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You have sign in successfuly',
                showConfirmButton: false,
                timer: 3500
            });
        } catch (error) {
            console.log('Failed to log in:', error);
        }
    };
    return (
        <div className='body-sign'>
                <h1>Sign In</h1>
            <form onSubmit={ handleSubmit(onSubmit) } className='container-sign'>
                <TextField
                    fullWidth
                    id='email'
                    label='Email'
                    name='email'
                    autoComplete='email'
                    variant='outlined'
                    margin='normal'
                    color='secondary'
                    { ...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Invalid email format'
                        }
                    }) }
                    error={ errors.email ? true : false }
                    helperText={ errors.email ? errors.email.message : '' }
                />
                <FormControl sx={ { mt: 1, mb: 3 } } fullWidth variant='outlined'>
                    <TextField
                        id='outlined-adornment-password'
                        fullWidth
                        label='Password'
                        name='password'
                        variant='outlined'
                        margin='normal'
                        color='secondary'
                        type={ showPassword ? 'text' : 'password' }
                        InputProps={ {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='toggle password visibility'
                                        onClick={ handleClickShowPassword }
                                        onMouseDown={ handleMouseDownPassword }
                                        edge='end'
                                    >
                                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        } }
                        { ...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        }) }
                        error={ errors.password ? true : false }
                        helperText={ errors.password ? errors.password.message : '' }
                    />
                </FormControl>
                <ARButton text="sign in" type="submit" />
            <br />
            <Link className='control' to='/FrontEnd-Areeq/signup'> 
            "Don't have an account? Sign up now!"
            </Link>
            </form>
        </div>
    );
};
export default SignIn;
