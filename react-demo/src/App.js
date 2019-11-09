import axios from 'axios';
import React, { useEffect, useState } from 'react';

import UserTable from './components/UserTable';

const USER_SERVICE_URL = 'https://reqres.in/api/users';

const App = () => {

  const [data, setData] = useState({ users: [], isLoading: true });

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

  return (
    <div className="container mt-5">
      <h1>Rest App</h1>
      {data.isLoading ? renderIsLoading() : <UserTable data={data} deleteUser={deleteUser} fetchData={fetchData} clearData={clearData} />}
    </div>
  );
}

export default App;
