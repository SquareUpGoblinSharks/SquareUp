import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const users = useSelector((state) => state.users);

  console.log('TESTING------------', users);
  
  return (
    <div className="profileContainer">
      <div className="profilePicture">PROFILE PICTURE COMPONENT</div>
      <div className="stats">STATS COMPONENT</div>
    </div>
  );
};



//return (  <div> HELO </div>  <div> BYE </div>)
export default Profile;
