// Logout.js

import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear local storage
    window.localStorage.clear();
    // Redirect to login page
    history.push('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
