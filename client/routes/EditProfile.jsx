import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login, getUsers } from '../state/userSlice.js';
import { useForm } from 'react-hook-form';

import BackgroundWrapper from '../components/BackgroundWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';
import EditForm from '../components/EditForm.jsx';

import client from '../lib/client.js';

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 


  const EditProfileHandler = async(data) => {
    const {profilePicture, ...body} = data;
    console.log('data', data)
    try{
      const resp = await client.patch('/editProfile', body);
      if (resp.status === 200) {
        dispatch(login(body));
        navigate('/home');
      } else {
        throw new Error(`Signup Handler Status: ${resp.status}`)
        //navigate(0)
      }
    } catch(err) {
      console.error(err);
    }
    
  };


  return (
    <BackgroundWrapper>
      <CenteredWrapper>
        {/*signup */}
        <div class="flex bg-orange-200 p-10 rounded-lg shadow-lg flex-column items-center">
          
          <div className="flex justify-center items-center">
            <EditForm onSubmitHandler={EditProfileHandler}/>
          </div>
        </div>
      </CenteredWrapper>
    </BackgroundWrapper>
  );
};

export default EditProfile;
