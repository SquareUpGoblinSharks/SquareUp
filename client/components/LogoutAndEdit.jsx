import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers, login } from '../state/userSlice.js';
import { useForm } from 'react-hook-form';
import client from '../lib/client';

const LogoutAndEdit = () => {
  const navigate = useNavigate();
  function clickHandler() {
    client.get('/logout');
    navigate('/');
  }
  
  return (
    <div id='logoutAndEdit' className='border-2 border-red-200 z-10'>
      <button id="edit" role="button" type='submit'>EDIT PROFILE</button>
      <br/>
      <button id="logout" onClick={clickHandler} role="button" type='submit'>LOGOUT</button>
    </div>
  );
};

export default LogoutAndEdit;
