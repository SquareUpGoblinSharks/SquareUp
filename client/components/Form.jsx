import React from 'react'
import FormInput from './FormInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from './Button';

const Form = ({onSubmit, inputDetails}) => {
  const { register, handleSubmit } = useForm();

  // generate form elements
  inputDetails.map(detailsObj => {

    console.log(detailsObj);
  })


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
      {inputDetails.map( (detailsObj, index) => {
        return <FormInput
          key={index}
          {...register(detailsObj.name, detailsObj.rules)}
          {...detailsObj}
        />
      })}
        <Button
          type={'submit'}
          value={'login'}
          primary={true}
          additionalClasses={'border-slate-300'}
        />
    </form>
  )
}

export default Form