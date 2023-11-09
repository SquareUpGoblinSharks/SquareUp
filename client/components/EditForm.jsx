import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Button from './Button';




const EditProfileForm = ({onSubmitHandler, defaultData}) => {
  const {register, handleSubmit } = useForm();
  const [gender, setGender] = useState(defaultData.sex);
  const onSubmit = data => {
    console.log('hello from onSubmit')
    onSubmitHandler(data);
  }


console.log(defaultData)

return (
  <form className={'flex flex-col text-orange-500'} onSubmit={handleSubmit(onSubmit)}> 
    {/*<div className={'flex justify-between my-1'}>
      <label>Username:</label>
      <input {...register('username')} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Password:</label>
      <input className={"w-45"} {...register('password')} type='password'/>
    </div>*/}
    <div className={'flex justify-between my-1'}>
      <label>Name:</label>
      <input placeholder={defaultData.name} className={"w-45"} {...register('name')} />
    </div>

    <div className={'flex justify-between my-1'}>
      <label>Gender:</label>
      <select  defaultValue={defaultData.sex} className={"w-45"} {...register('sex')}> 
        <option className={"w-45"} value='female'>Female</option>
        <option className={"w-45"} value='male'>Male</option>
        <option className={"w-45"} value='other'>Other</option>
      </select>
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Age:</label>
      <input placeholder={defaultData.age} type='number' {...register('age', {min: 18, max: 99})} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Height:</label>
      <input placeholder={defaultData.height} type='number' {...register('height')} />
    </div>
    <div className={'flex justify-between my-1'}>
      <label>Weight:</label>
      <input placeholder={defaultData.weight} type='number' {...register('weight')} />
    </div>
    <div className={'flex justify-between mt-1 mb-4'}>
      <label>Fighting Style:</label>
      <input placeholder={defaultData.fightingStyle} {...register('fightingStyle')} />
    </div>
    <div className={'flex justify-between mt-1 mb-4'}>
      <label>Location:</label>
      <input placeholder={defaultData.location} {...register('fightingStyle')} />
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