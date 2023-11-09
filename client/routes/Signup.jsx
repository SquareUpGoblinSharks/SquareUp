import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login, getUsers } from '../state/userSlice';
import { useForm } from 'react-hook-form';

import BackgroundWrapper from '../components/BackgroundWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';
import SignupForm from '../components/SignupForm.jsx';

import client from '../lib/client';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();


  const SignupHandler = async(data) => {
    const body = data;
    console.log('data', data)
    try{
      const resp = await client.post('/signup', body);
      if (resp.status === 200) {
        dispatch(login(resp.data));
        navigate('/home');
      } else {
        throw new Error(`Signup Handler Status: ${resp.status}`)
        //navigate(0)
      }
    } catch(err) {
      console.error(err);
    }
    
  };

      /** THE ISSUE WITH PROFILE PICTURES IS THAT WE WERE ABLE TO UPLOAD AND STORE THE IMAGES LOCALLY,
       *  AND WE WANTED TO STORE THE IMAGE PATH IN THE DATABASE,
       *  BUT OUR STORE-IMAGE AND RETREIVE-IMAGE FETCH REQUESTS NEED TO SEND THE USER'S USERNAME TOO
       *  SO THAT IN THE SERVER CONTROLLERS YOU WILL KNOW WHICH USER IN THE DATABASE TO QUERY FOR.
       *  WE DIDN'T KNOW HOW TO SEND FETCH REQUESTS WITH MULTIPLE TYPES OF DATA.
       */

      // // Stores the image
      // fetch('http://localhost:8000/profile_picture', { // routes to line 38 in server/server.js
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'multipart/form-data',
      //   },
      //   body: formData,
      // });

      // // Retrieves the stored image
      // const getImageResponse = await axios.get(
      //   'http://localhost:8000/profile_picture', // routes to line 47 in server/server.js
      //   {
      //     responseType: 'arraybuffer',
      //   }
      // );
      // let blob = new Blob([getImageResponse.data], {
      //   type: getImageResponse.headers['content-type'],
      // });
      // let image = URL.createObjectURL(blob);
      // console.log('image', image);
    


  return (
    <BackgroundWrapper>
      <CenteredWrapper>
        {/*signup */}
        <div class="flex bg-orange-200 p-10 rounded-lg shadow-lg flex-column items-center">
          
          <div className="flex justify-center items-center">
            <SignupForm onSubmitHandler={SignupHandler}/>
          </div>
        </div>
      </CenteredWrapper>
    </BackgroundWrapper>
  );
};

export default Signup;
