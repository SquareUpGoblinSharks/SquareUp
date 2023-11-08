import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers, login } from '../state/userSlice.js';
import { useForm } from 'react-hook-form';


import HexGreenBGWrapper from '../components/HexGreenBGWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';

import client from '../lib/client.js';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  /**
   * When the submit button is clicked, initiates a fetch request to server.
   * Fetch request should return user information.
   * If fetch request succeeds and state is updated with user info, redirect to '/'.
   */
  
  const onSubmit = async (data) => {

    try{
      
      const response = await client.post('/login', data, {})
      if (response.status === 200) {
        dispatch(login(response.data));
        const allUsersResponse = await client.get('/HomePage');
        if (allUsersResponse.status === 200) {
          dispatch(getUsers(allUsersResponse.data));
          navigate('/home')
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <HexGreenBGWrapper>
      <CenteredWrapper>
      <div className='login'>
      <div className='logo'><a>Square UP!</a></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} placeholder="username" />
        <input {...register('password')} type="password" placeholder="password" />
        <input  className='button' type="submit" value="login" />
        <button className='button' type='button' onClick={
          () => {navigate('/signup')}
        }>Create Account</button> 
      </form>
    </div>
      </CenteredWrapper>
    </HexGreenBGWrapper>
    
  );
};

export default Login;
