import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers, login } from '../state/userSlice.js';
import { useForm } from 'react-hook-form';

import Button from '../components/Button.jsx';
import client from '../lib/client.js';
import Form from '../components/Form.jsx';

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
    try {
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
    <>
    {/* Replace this with evan's container */}
      <h3>Square Up!</h3>
      <Form
        onSubmit={onSubmit}
        inputDetails={[
          {
            name: 'username',
            placeholder: 'username',
            rules: {required: true}
          }
          ,{
            name: 'password',
            type: 'password',
            placeholder: 'password',
            rules: {required: true}
          }
        ]}>
        <Button
          type={'submit'}
          value={'login'}
          primary={true}
          additionalClasses={'border-slate-300'}
        />
      </Form>



      {/* <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
        <input {...register('username', {required: true})} placeholder="username" />
        <input {...register('password', {required: true})} type="password" placeholder="password" />
        <Button
          type={'submit'}
          value={'login'}
          primary={true}
          additionalClasses={'border-slate-300'}
        />
      </form> */}
      <Button
        onClickFunc={() => { navigate('/signup') }}
        primary={false}
        value={'Create Account'}
      />
    </>
  );
};

export default Login;
