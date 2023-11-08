import React from 'react';
import { useForm } from 'react-hook-form';

import Button from './Button';


const SignupForm = ({onSignupHandler}) => {
  const {register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log('hello from onSubmit')
    console.log(data)
  }

//scratch
const SignupHandler = async(data) => {};



return (
  <form className={'flex flex-col'} onSubmit={handleSubmit(onSubmit)}> 
    <div className={'flex justify-between text-orange-500'}>
      <label>Username:</label>
      <input {...register('username')} />
    </div>
    <div className={'flex justify-between text-orange-500'}>
      <label>Password:</label>
      <input {...register('password')} type='password'/>
    </div>
    <div className={'flex justify-between text-orange-500'}>
      <label>Name:</label>
      <input {...register('name')} />
    </div>
    <div className={'flex justify-between text-orange-500'}>
      <label>Gender:</label>
      <select {...register('sex')}> 
        <option value='female'>Female</option>
        <option value='male'>Male</option>
        <option value='other'>Other</option>
      </select>
    </div>
    <div className={'flex justify-between text-orange-500'}>
      <label>Age:</label>
      <input type='number' {...register('age', {min: 18, max: 99})} />
    </div>
    <div className={'flex justify-between text-orange-500'}>
      <label>Height:</label>
      <input type='number' {...register('height')} />
    </div>
    <div className={'flex justify-between text-orange-500'}>
      <label>Weight:</label>
      <input type='number' {...register('weight')} />
    </div>
    <div className={'flex justify-between text-orange-500'}>
      <label>Fighting Style:</label>
      <input {...register('fightingStyle')} />
    </div>
    <div className={'flex justify-between text-orange-500'}>
      <label>Location:</label>
      <input {...register('location')} />
    </div>
    <div className={'flex justify-between text-orange-500'}>
      <label>Profile Picture:</label>
      <input type="file" 
      accept="image/gif, image/jpeg, image/png" 
      {...register('profilePicture')} />
    </div>
    <Button type='submit' value='Sign Up' primary={true} />
  </form>
);
  
};

export default SignupForm;