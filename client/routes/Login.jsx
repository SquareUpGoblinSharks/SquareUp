import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers, login } from '../state/userSlice.js';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * When the submit button is clicked, initiates a fetch request to server.
   * Fetch request should return user information.
   * If fetch request succeeds and state is updated with user info, redirect to '/'.
   */
  const onLoginHandler = async (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    console.log('username: ', username);
    console.log('password: ', password);
    try {
      // Fetch user info
      const userResponse = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const userInfo = await userResponse.json();
      console.log('TESTING', userInfo);
      dispatch(login(userInfo));

      // If user info successfully fetched, fetch all users info (to use on the HomePage), and then navigate to '/home';
      if (userResponse.ok) {
        const allUsersResponse = await fetch('http://localhost:8000/HomePage');
        const allUsersInfo = await allUsersResponse.json();
        console.log('TESTING', allUsersInfo);
        dispatch(getUsers(allUsersInfo));
        if (allUsersResponse.ok) {
          navigate('/home');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class='login'>
      <div class='logo'><a>Square UP!</a></div>
      <form onSubmit={onLoginHandler}>
        <input name="username" type="text" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <input class='button' type="submit" value="login" />
        <button class='button' type='button' onClick={
          () => {navigate('/signup')}
        }>Create Account</button> 
      </form>
    </div>
  );
};

export default Login;
