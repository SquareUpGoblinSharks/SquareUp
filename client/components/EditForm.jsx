import React from 'react';
import { useForm } from 'react-hook-form';

import Button from './Button';


import client from '../lib/client';


const EditProfileForm = ({onSubmitHandler}) => {
  const {register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log('hello from onSubmit')
    onSubmitHandler(data);
  }





return (
  <form className={'flex flex-col text-orange-500'} onSubmit={handleSubmit(onSubmit)}> 
    <div className={'flex justify-between my-1'}>
      <label>Username:</label>
      <input {...register('username')} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Password:</label>
      <input className={"w-45"} {...register('password')} type='password'/>
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Name:</label>
      <input className={"w-45"} {...register('name')} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Gender:</label>
      <select  className={"w-45"} {...register('sex')}> 
        <option  className={"w-45"} value='female'>Female</option>
        <option  className={"w-45"} value='male'>Male</option>
        <option  className={"w-45"} value='other'>Other</option>
      </select>
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Age:</label>
      <input type='number' {...register('age', {min: 18, max: 99})} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Height:</label>
      <input type='number' {...register('height')} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Weight:</label>
      <input type='number' {...register('weight')} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Fighting Style:</label>
      <input {...register('fightingStyle')} />
    </div>
    <div className={'flex justify-between mt-1 mb-4'}>
      <label>Location:</label>
      <input {...register('location')} />
    </div>
    {/*
    <div className={'flex justify-between my-1'}>
      <label>Profile Picture:</label>
      <input type="file" 
      accept="image/gif, image/jpeg, image/png" 
      {...register('profilePicture')} />
    </div>
    */}
    <Button type='submit' value='Edit Profile' primary={true} />
  </form>
);
  
};

export default EditProfileForm;