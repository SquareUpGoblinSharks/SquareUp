import React from 'react'
import FormInput from './FormInput';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from './Button';

const Form = ({additionalClasses, onSubmit, inputDetails, children}) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col items-center bg-central-blue p-5 rounded-lg ${additionalClasses}`}
    >
      {inputDetails.map( (detailsObj, index) => {
        return (
          <FormInput
            key={index}
            {...register(detailsObj.name, detailsObj.rules)}
            {...detailsObj}
          />
        )
      })}

      {children}
    </form>
  )
}

export default Form