import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login, getUsers } from '../state/userSlice.js';

import useAuth from '../lib/useAuth.js';


import BackgroundWrapper from '../components/BackgroundWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';
import EditForm from '../components/EditForm.jsx';

import client from '../lib/client.js';

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, failure } = useAuth(null, '/');
  const [ profileData, setProfileData ] = useState('')
  useEffect(() => {
    client.get('/verifyCookie').then((resp) => {
      if (resp.data.verified) {
            setProfileData(resp.data.data)
            dispatch(login(resp.data.data))
      } else {
        failure('/')
      }
    });
  }, []);

  const EditProfileHandler = async (data) => {
    const { profilePicture, ...body } = data;
    console.log('data', data);
    try {
      const resp = await client.patch('/editProfile', body);
      if (resp.status === 200) {
        console.log('the edit worked!');
        dispatch(login(body));
        navigate('/home');
      } else {
        throw new Error(`Signup Handler Status: ${resp.status}`);
        //navigate(0)
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <BackgroundWrapper>
      <CenteredWrapper>
        {/*signup */}
        <div className="flex bg-central-blue p-10 rounded-lg shadow-lg flex-column items-center">
          <div className="flex justify-center items-center">
          {/* <h1 className='text-xl font-bold text-white bg-dark-slate-green p-2 px-4 sticky top-0 z-10'>Edit Profile</h1> */}
            {profileData ? <EditForm defaultData={profileData} onSubmitHandler={EditProfileHandler} /> : <></>}
          </div>
        </div>
      </CenteredWrapper>
    </BackgroundWrapper>
  );
};

export default EditProfile;
