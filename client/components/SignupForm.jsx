import React from 'react';
import { useForm } from 'react-hook-form';

import Button from './Button';


import client from '../lib/client';


const SignupForm = ({onSubmitHandler}) => {
  const {register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log('hello from onSubmit')
    onSubmitHandler(data);
  }





return (
  
  <form className={'flex flex-col '} onSubmit={handleSubmit(onSubmit)}> 
    <div className={'flex justify-between my-1'}>
      <label>Username:</label>
      <input {...register('username')} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Password:</label>
      <input className={"w-45"} {...register('password')} type='password'/>
    </div>
    <div className={'flex justify-between mt-1 mb-4'}>
      <label>Name:</label>
      <input className={"w-45"} {...register('name')} />
    </div>
    <Button type='submit' value='Sign Up' primary={true} />
  </form>
);
  
};

export default SignupForm;