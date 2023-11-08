import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers, login } from '../state/userSlice.js';
import { useForm } from 'react-hook-form';

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
  // const onLoginHandler = async (event) => {
  //   event.preventDefault();
  //   const username = event.target.elements.username.value;
  //   const password = event.target.elements.password.value;
  //   console.log('username: ', username);
  //   console.log('password: ', password);
  //   try {
  //     // Fetch user info
  //     const userResponse = await fetch('http://localhost:8000/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //         password: password,
  //       }),
  //     });
  //     const userInfo = await userResponse.json();
  //     console.log('TESTING', userInfo);
  //     dispatch(login(userInfo));

  //     // If user info successfully fetched, fetch all users info (to use on the HomePage), and then navigate to '/home';
  //     if (userResponse.ok) {
  //       const allUsersResponse = await fetch('http://localhost:8000/HomePage');
  //       const allUsersInfo = await allUsersResponse.json();
  //       console.log('TESTING', allUsersInfo);
  //       dispatch(getUsers(allUsersInfo));
  //       if (allUsersResponse.ok) {
  //         navigate('/home');
  //       }
  //     }
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };
  const onSubmit = async (data) => {
    console.log(data);
    try{
      console.log(client)
      const response = await client.post('/login', data, {
        headers: {'Content-type': 'application/json'}
      })
      console.log('response', response);
    } catch(err){
    
    }
  }

  return (
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
  );
};

export default Login;
