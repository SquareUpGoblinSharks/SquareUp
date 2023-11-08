import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ButtonBar from './ButtonBar';

const Profile = () => {
  const users = useSelector(({ userSlice }) => userSlice.users);

  const [userList, setUserList] = useState(users);

  // const {
  //   username,
  //   age,
  //   sex,
  //   weight,
  //   height,
  //   fightingStyle,
  //   totalWins,
  //   totalLosses,
  // } = lastUser;
  //when tehre is a stae change in the users set the userList to that new userList
  useEffect(() => {
    // Update userList whenever the users array in the Redux store changes
    setUserList(users);
  }, [users]);

  //on click we will slice that last element off and copy it, pop won't work unless you dont directly mutate the array
  const passHandleClick = () => {
    if (users.length === 1) {
      return;
    }
    setUserList((prev) => prev.slice(0, -1));
  };

  const squareUpHandleClick = () => {
    if (users.length === 1) {
      return;
    }
    setUserList((prev) => prev.slice(0, -1));
  };

  console.log(userList);

  //always render the last user on the array of object of the profiles
  const lastUser = userList[userList.length - 1];
  // console.log('TESTING------------', users);

  return (
    <div className="profileContainer">
      <div className="profilePicture"></div>
      {lastUser && (
        // <div class='stat-style'>
        <div className="stats">
          <li>Username: {lastUser.username}</li>
          <li>Age: {lastUser.age}</li>
          <li>Sex: {lastUser.sex}</li>
          <li>Weight: {lastUser.weight}</li>
          <li>Height: {lastUser.height}</li>
          <li>Fighting Style: {lastUser.fightingStyle}</li>
          <li>Wins: {lastUser.totalWins}</li>
          <li>Losses: {lastUser.totalLosses}</li>
        </div>
        // </div>
      )}
      <ButtonBar
        passHandleClick={passHandleClick}
        squareUpHandleClick={squareUpHandleClick}
      />
    </div>
  );
};

//return (  <div> HELO </div>  <div> BYE </div>)

export default Profile;
