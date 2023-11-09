import React from 'react';
import useAuth from '../lib/useAuth.js';
import { useNavigate } from 'react-router-dom';

const LogoutAndEdit = () => {
  const navigate = useNavigate();
  const { failure } = useAuth();
  
  return (
    <div id='logoutAndEdit'>
      <button id="edit" role="button" type='submit' onClick={()=> navigate('/edit-profile')}>EDIT PROFILE</button>
      <br/>
      <button id="logout" onClick={()=> failure('/')} role="button" type='submit'>LOGOUT</button>
    </div>
  );
};

export default LogoutAndEdit;
