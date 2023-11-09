import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers, login } from '../state/userSlice.js';
import { useForm } from 'react-hook-form';

import Button from '../components/Button.jsx';
import BackgroundWrapper from '../components/BackgroundWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';

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
          navigate('/home');
        }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BackgroundWrapper>
      <CenteredWrapper additionalClasses={'dark-slate-green'}>
      <h1 
        className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6x'
      >Square Up!</h1>
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

      <Button
        onClickFunc={() => { navigate('/signup') }}
        primary={false}
        value={'Create Account'}
      />
      </CenteredWrapper>
    </BackgroundWrapper>
    
  );
};

export default Login;
