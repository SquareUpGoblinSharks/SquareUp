import React from 'react';
import useAuth from '../lib/useAuth.js';

const LogoutAndEdit = () => {

  const { failure } = useAuth();
  function clickHandler() {
    failure('/');
  }
  
  return (
    <div id='logoutAndEdit'>
      <button id="edit" role="button" type='submit'>EDIT PROFILE</button>
      <br/>
      <button id="logout" onClick={clickHandler} role="button" type='submit'>LOGOUT</button>
    </div>
  );
};

export default LogoutAndEdit;
