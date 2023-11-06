import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../state/userSlice';

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
    const url = '';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: {
          username: JSON.stringify(username),
          password: JSON.stringify(password),
        },
      });
      const userInfo = await response.json();
      dispatch(login(userInfo));
      navigate('/');
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form onSubmit={onLoginHandler}>
      <input name="username" type="text" placeholder="username" />
      <input name="password" type="password" placeholder="password" />
      <input type="submit" value="login" />
    </form>
  );
};

export default Login;
