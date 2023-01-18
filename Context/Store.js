import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as ApiContext from './APIContext';
function Store({ children }) {
  const [users, setUsers] = useState([]);
  const memoizedValue = useMemo(() => [users, setUsers], [users]);

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
    <ApiContext.Provider value={memoizedValue}>{children}</ApiContext.Provider>
  );
}
Store.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Store;
