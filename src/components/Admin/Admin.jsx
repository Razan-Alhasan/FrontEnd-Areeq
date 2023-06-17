import React, { useEffect, useState } from 'react';
import './Admin.css';
import { getAllUsers, removeUser, updateUser } from '../../api/userApi';
import { Link } from 'react-router-dom';
const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllUsers();
            setUsers(data);
            console.log(data);
        };

        fetchData();
    }, []);
    const handleApprove = async (userId) => {
        const updatedUsers = [];
        for (const user of users) {
            if (user.id === userId) {
                const updatedUser = { ...user, approvalStatus: true };
                await updateUser(user.id, updatedUser);
                updatedUsers.push(updatedUser);
            } else {
                updatedUsers.push(user);
            }
        }
        setUsers(updatedUsers);
    };
    const handleDelete = async (userId) => {
        const updatedUsers = [];
        for (const user of users) {
            if (user.id === userId) {
                await removeUser(userId);
            } else {
                updatedUsers.push(user);
            }
        }
        setUsers(updatedUsers);
    };
    return (
        <div className="container-admin">
            <h1>Admin Control Panel</h1>
            <div className="user-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((user) => (
                            <tr key={ user.id }>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                {
                                    user && (user.approvalStatus === false) && (
                                        <td>
                                            <button className="btn btn-success approve-btn" on onClick={() => handleApprove(user.id)}>Approve</button>
                                            <button className="btn btn-danger decline-btn" onClick={ () => handleDelete(user.id) }>Decline</button>
                                        </td>
                                    ) }
                                {
                                    user && (user.approvalStatus === true) && (
                                        <td>
                                            <button className="btn  btn-danger" onClick={ () => handleDelete(user.id) }>Delete</button>
                                            <Link to={ `/FrontEnd-Areeq/admin/update/${user.id}` } className="btn btn-primary">
                                                Update
                                            </Link>
                                            <Link to={ `/FrontEnd-Areeq/admin/changePass/${user.id}` } className="btn btn-warning">
                                                Change Password
                                            </Link>
                                        </td>
                                    ) }
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
