import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login, getUsers } from '../state/userSlice.js';
import { useForm } from 'react-hook-form';

import BackgroundWrapper from '../components/BackgroundWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';
import SignupForm from '../components/SignupForm.jsx';

import client from '../lib/client.js';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const SignupHandler = async (data) => {
    const body = data;
    console.log('data', data);
    try {
      const resp = await client.post('/signup', body);
      if (resp.status === 200) {
        dispatch(login(resp.data));
        navigate('/home');
      } else {
        throw new Error(`Signup Handler Status: ${resp.status}`);
        //navigate(0)
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <BackgroundWrapper>
      <CenteredWrapper>
        {/*signup */}
        <div className="flex bg-central-blue p-10 rounded-lg shadow-lg flex-column items-center">
          <div className="flex justify-center items-center">
            <SignupForm onSubmitHandler={SignupHandler} />
          </div>
        </div>
      </CenteredWrapper>
    </BackgroundWrapper>
  );
};

export default Signup;
