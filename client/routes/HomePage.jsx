// react/redux
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUsers, login, assignToken } from '../state/userSlice.js';

// components
import Profile from '../components/Profile.jsx';
import Leaderboard from '../components/Leaderboard.jsx';
import UpcomingMatches from '../components/UpcomingMatches.jsx';
import LogoutAndEdit from '../components/LogoutAndEdit.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';
import useAuth from '../lib/useAuth.js';
import BackgroundWrapper from '../components/BackgroundWrapper.jsx';
import client from '../lib/client.js';



const HomePage = () => {
  const dispatch = useDispatch();
  // const {users} = useSelector(state => state.userSlice);
  const { userState, ssid } = useAuth(null, '/Login');
  

  useEffect( () => {
    dispatch(getAllUsers());
  }, []);

  useEffect(()=>{
    if (userState) {
      dispatch(login(userState));
      dispatch(assignToken(ssid));
    }
  },[userState]);




  // // Testing - can be removed later
  // useEffect( () => {
  //   console.log(users[0]);
  // }, [users])

  
  return (
    <BackgroundWrapper>
      <CenteredWrapper>
        <div className='flex items-stretch justify-center max-h-full'>
          <Leaderboard />
          <Profile />
          <UpcomingMatches />
          <LogoutAndEdit />
        </div>
      </CenteredWrapper>
    </BackgroundWrapper>
  );
};

export default HomePage;
