import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, login, loginUser } from '../state/userSlice.js';
import { useForm } from 'react-hook-form';

import Button from '../components/Button.jsx';
import BackgroundWrapper from '../components/BackgroundWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';

import client from '../lib/client.js';
import Form from '../components/Form.jsx';
import useAuth from '../lib/useAuth.js';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { setCookie, success, failure, ssid } = useAuth('/home')

  const userStatus = useSelector(state => state.userSlice.userStatus);
  const error = useSelector(state => state.userSlice.error);
  const user = useSelector(state => state.userSlice.user)
  const userToken = useSelector(state => state.userSlice.userToken);

  if (userStatus === 'succeeded') {
    console.log(user)
  }
  const onSubmit = async (data) => {
    dispatch(loginUser(data));
  };

  useEffect(()=>{
    if (userToken) {
      setCookie(userToken);
      success();
    } else if (ssid) {
      success();
    } else {
      failure(0)
    }
  }, [userToken]);

  return (
    <BackgroundWrapper>
      <CenteredWrapper additionalClasses={'dark-slate-green'}>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6x">
          Square Up!
        </h1>
        <Form
          onSubmit={onSubmit}
          inputDetails={[
            {
              name: 'username',
              placeholder: 'username',
              rules: { required: true },
            },
            {
              name: 'password',
              type: 'password',
              placeholder: 'password',
              rules: { required: true },
            },
          ]}
        >
          <Button
            type={'submit'}
            value={'login'}
            primary={true}
            additionalClasses={'border-slate-300'}
          />
        </Form>

        <Button
          onClickFunc={() => {
            navigate('/signup');
          }}
          primary={false}
          value={'Create Account'}
        />
      </CenteredWrapper>
    </BackgroundWrapper>
  );
};

export default Login;
