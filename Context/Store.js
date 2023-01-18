import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as ApiContext from './APIContext';
function Store({ children }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ApiContext.Provider value={[users, setUsers]}>
      {children}
    </ApiContext.Provider>
  );
}
export default Store;
