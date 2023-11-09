import React from 'react';
import useAuth from '../lib/useAuth.js';
import Button from './Button.jsx';

const LogoutAndEdit = () => {

  const { failure } = useAuth();
  function clickHandler() {
    failure('/');
  }
  
  return (
    <div id='logoutAndEdit' className='z-10 self-start'>
      <Button value={'Edit Profile'}  primary={true}/>
      <br/>
      <Button onClickFunc={clickHandler} value={'Logout'}  primary={false}/>
    </div>
  );
};

export default LogoutAndEdit;
