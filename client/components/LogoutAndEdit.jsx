import React from 'react';
import useAuth from '../lib/useAuth.js';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';

const LogoutAndEdit = () => {
  const navigate = useNavigate();
  const { failure } = useAuth();
  
  return (
    <div id='logoutAndEdit' className='z-10 self-start'>
      <Button onClickFunc={()=> navigate('/edit-profile')} value={'Edit Profile'}  primary={true}/>
      <br/>
      <Button onClickFunc={()=> failure('/')} value={'Logout'}  primary={false}/>
    </div>
  );
};

export default LogoutAndEdit;
