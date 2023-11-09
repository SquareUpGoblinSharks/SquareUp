// react/redux
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUsers, login } from '../state/userSlice.js';

// components
import Profile from '../components/Profile.jsx';
import Leaderboard from '../components/Leaderboard.jsx';
import UpcomingMatches from '../components/UpcomingMatches';
import LogoutAndEdit from '../components/LogoutAndEdit.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';
import useAuth from '../lib/useAuth.js';
import BackgroundWrapper from '../components/BackgroundWrapper.jsx';
import client from '../lib/client.js';
import userSlice from '../state/userSlice.js';
// Not sure what this is??
import { async } from 'regenerator-runtime';
import { data } from 'autoprefixer';



const HomePage = () => {
  const dispatch = useDispatch();
  // const {users} = useSelector(state => state.userSlice);

  useEffect( () => {
    dispatch(getAllUsers());
  }, []);


  // // Testing - can be removed later
  // useEffect( () => {
  //   console.log(users[0]);
  // }, [users])

  useAuth(null, '/Login');
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
