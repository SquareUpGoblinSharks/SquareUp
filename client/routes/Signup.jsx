import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { login, getUsers } from '../state/userSlice';
import { useForm } from 'react-hook-form';

import HexGreenBGWrapper from '../components/HexGreenBGWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';
import SignupForm from '../components/SignupForm.jsx';

import client from '../lib/client';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSignupHandler = async (event) => {
    event.preventDefault();
    const userObj = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
      name: event.target.elements.name.value,
      age: event.target.elements.age.value,
      sex: event.target.elements.sex.value,
      height: event.target.elements.height.value,
      weight: event.target.elements.weight.value,
      fightingStyle: event.target.elements.fightingStyle.value,
      location: event.target.elements.location.value,
      profilePicture: '',
    };

    const profilePicture = event.target.elements.profilePicture.files[0];

    const formData = new FormData();
    formData.append('profilePicture', profilePicture);

    try {
      const createUserResponse = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj),
      });

      const createUserData = await createUserResponse.json();
      dispatch(login(createUserData));

      const allUsersResponse = await fetch('http://localhost:8000/HomePage');
      const allUsersInfo = await allUsersResponse.json();
      console.log('TESTING', allUsersInfo);
      dispatch(getUsers(allUsersInfo));
      navigate('/home');

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
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <HexGreenBGWrapper>
      <CenteredWrapper>
        <div class="signup">
          <div className="sign-container">
            <SignupForm />
            {/* <form className="signForm" onSubmit={onSignupHandler}>
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input id="name" name="name" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="sex" className="form-label">
                  Sex:
                </label>
                <input id="sex" name="sex" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="age" className="form-label">
                  Age:
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="height" className="form-label">
                  Height:
                </label>
                <input
                  id="height"
                  name="height"
                  type="number"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="weight" className="form-label">
                  Weight:
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fightingStyle" className="form-label">
                  Fighting Style:
                </label>
                <input
                  id="fightingStyle"
                  name="fighting style"
                  type="text"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Location:
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="profilePicture" className="form-label">
                  Profile Picture:
                </label>
                <input
                  id="profilePicture"
                  name="profilePicture"
                  type="file"
                  accept="image/gif, image/jpeg, image/png"
                  className="form-input"
                />
              </div>
              <input type="submit" value="Create User" className="submit-btn" />
            </form> */}
          </div>
        </div>
      </CenteredWrapper>
    </HexGreenBGWrapper>
  );
};

export default Signup;
