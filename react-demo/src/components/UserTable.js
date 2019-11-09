import './UserTable.scss';

import React from 'react';

const UserTable = ({ data, deleteUser, clearData, fetchData }) => {

    return (
        <>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Identity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{user.email}</td>
                            <td><img src={user.avatar} className="avatar" alt="" /></td>
                            <td><button className="btn btn-sm btn-primary" onClick={() => deleteUser(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-sm btn-primary mr-2" onClick={clearData}>Clear</button>
            <button className="btn btn-sm btn-primary" onClick={fetchData}>Fetch</button>
        </>
    )
}


export default UserTable;
