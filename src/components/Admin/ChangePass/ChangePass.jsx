import React, { useEffect, useState } from 'react';
import { getUserById, updateUser } from '../../../api/userApi';
import { useNavigate, useParams } from 'react-router';
import './ChangePass.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
const Update = () => {
    const { userId } = useParams();
    const [user, setUser] = useState();
    const [newPass, setNewPass] = useState();
    const [cNewPass, setCNewPass] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserById(userId);
            setUser(data);
        };
        fetchData();
    }, [userId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (cNewPass === newPass) {
                const updatedUser = { ...user, password: newPass };
                await updateUser(userId, updatedUser);
                console.log('Change successfully !');
                navigate('/FrontEnd-Areeq/admin');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfuly changed',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                console.log('pass not match!');
            }
        } catch (err) {
            console.log('error changed, ', err);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="update-container">
            <h1>Change seller password</h1>
            <form onSubmit={ handleSubmit }>
                <div className="input-row">
                    <label>
                        New password:
                        <input
                            type="password"
                            value={ newPass }
                            onChange={ (e) => setNewPass(e.target.value) }
                            className="input-field"
                        />
                    </label>
                </div>
                <div className="input-row">
                    <label>
                        Confirm new password:
                        <input
                            type="password"
                            value={ cNewPass }
                            onChange={ (e) => setCNewPass(e.target.value) }
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
