import axios from 'axios';
import React, { useEffect, useState } from 'react';

import UserTable from './components/UserTable';

const USER_SERVICE_URL = 'https://reqres.in/api/users';

const App = () => {

  const [data, setData] = useState({ users: [], isLoading: true });

  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    async function getUsers() {
      try {
        const result = await axios(USER_SERVICE_URL);
        setData({ users: result.data.data, isLoading: false });
        console.log(data);
      } catch (e) {
        console.log(e);
        setData({ users: data.users, isLoading: false });
      }
    }

    setTimeout(getUsers, 1000);
    // eslint-disable-next-line
  }, [data.isLoading]);

  const renderIsLoading = () => {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  const clearData = () => setData({ users: [], isLoading: data.isLoading });

  const fetchData = () => setData({ users: [], isLoading: true });

  const deleteUser = (id) => setData({ users: [...data.users.filter(u => u.id !== id)], isLoading: data.isLoading });

  const handleSubmit = (e) => {
    setData({ users: [...data.users, newUser], isLoading: data.isLoading });
    e.preventDefault();
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const user = {
      id: Math.max.apply(Math, data.users.map((u) => u.id + 1)),
      email: `${value}@reqres.in`,
      first_name: value,
      last_name: 'Surname',
      avatar: 'https://source.unsplash.com/random'
    };
    setNewUser(user);
  }

  return (
    <div className="container mt-5">
      <h1>Rest App</h1>

      {data.isLoading ? renderIsLoading() : <UserTable data={data} deleteUser={deleteUser} fetchData={fetchData} clearData={clearData} />}

      {
        !data.isLoading && (
          <form className="mt-5" onSubmit={handleSubmit}>
            <div>
              <input type="text" className="form-control" id="userName" placeholder="Name" onChange={handleChange} />
            </div>
            <input type="submit" className="btn btn-sm btn-primary mt-2" value="Submit" />
          </form>)
      }
    </div>
  );
}

export default App;
