import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login, getUsers, signupUser } from '../state/userSlice';
import { useForm } from 'react-hook-form';

import BackgroundWrapper from '../components/BackgroundWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';
import SignupForm from '../components/SignupForm.jsx';
import useAuth from '../lib/useAuth.js';
import client from '../lib/client';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { setCookie, success, failure } = useAuth('/home')
  const userToken = useSelector(state => state.userSlice.userToken);

  const SignupHandler = async(data) => {
    const body = data;
    dispatch(signupUser(data))
  };

  useEffect(()=>{
    if (userToken) {
      setCookie(userToken);
      success();
    } else {
      failure(0)
    }
  }, [userToken]);


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
