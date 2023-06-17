import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '../../../api/userApi';
import { useNavigate, useParams } from 'react-router';
import './Update.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
const Update = () => {
    const { userId } = useParams();
    const [user, setUser] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserById(userId);
            setUser(data);
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
        };

        fetchData();
    }, [userId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedUser = { ...user, firstName, lastName, email };
        try {
            await updateUser(userId, updatedUser);
            console.log('updated successfully !');
            navigate('/FrontEnd-Areeq/admin')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title:  'Successfuly updated',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (err) {
            console.log('error updating, ', err);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="update-container">
            <h1>Update seller info</h1>
            <form onSubmit={ handleSubmit }>
                <div className="input-row">
                    <label>
                        First Name:
                        <input
                            type="text"
                            value={ firstName }
                            onChange={ (e) => setFirstName(e.target.value) }
                            className="input-field"
                        />
                    </label>
                </div>
                <div className="input-row">
                    <label>
                        Last Name:
                        <input
                            type="text"
                            value={ lastName }
                            onChange={ (e) => setLastName(e.target.value) }
                            className="input-field"
                        />
                    </label>
                </div>
                <div className="input-row">
                    <label>
                        Email:
                        <input
                            type="email"
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }
                            className="input-field"
                        />
                    </label>
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );

};

export default Update;
