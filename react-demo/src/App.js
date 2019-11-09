import './App.scss';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const USER_SERVICE_URL = 'https://reqres.in/api/users';

const App = () => {

  const [data, setData] = useState({ users: [], isFetching: true });

  useEffect(() => {
    async function getUsers() {
      try {
        const result = await axios(USER_SERVICE_URL);
        setData({ users: result.data.data, isFetching: false });
        console.log(data);
      } catch (e) {
        console.log(e);
        setData({ users: data.users, isFetching: false });
      }
    }
    getUsers();
    // eslint-disable-next-line
  }, [data.isFetching]);

  const clearData = () => setData({ users: [], isFetching: data.isFetching });

  const fetchData = () => setData({ users: [], isFetching: true });

  return (
    <div className="container mt-5">
      <h1>Rest App</h1>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Identity</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map(user => (
            <tr key={user.id}>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} className="avatar" alt="" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-sm btn-primary mr-2" onClick={clearData}>Clear</button>
      <button className="btn btn-sm btn-primary" onClick={fetchData}>Fetch</button>
    </div>
  );
}

export default App;
