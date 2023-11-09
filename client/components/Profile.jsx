import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ButtonBar from './ButtonBar';
import UserProfileDetails from './UserProfileDetails';

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

  if (lastUser) {
    return (
      <div className='bg-central-blue m-5 p-5 border-2 overflow-scroll max-h-full rounded-lg border-gray-700 h-[90vh]' >
        <div className='flex align-center justify-center p-2'>
          <h1 className='text-2xl font-bold text-slate-800 my-2'>{lastUser.username}</h1>
        </div>
        <div className="profilePicture max-w-sm">
          <img className='max-w-full	h-auto' src="https://i.pinimg.com/originals/69/1d/29/691d293ee7b65eb6b8be210918f24d09.png" alt="Next Opponent" />
        </div>


        <ul className='grid grid-cols-2 gap-4 text-sm p-4'>
          <UserProfileDetails value={lastUser.fightingStyle} additionalClasses={'col-span-2'}/>
          <UserProfileDetails value={lastUser.age}/>
          <UserProfileDetails value={lastUser.sex}/>
          <UserProfileDetails value={lastUser.weight}/>
          <UserProfileDetails value={lastUser.height}/>
          <UserProfileDetails value={lastUser.totalWins}/>
          <UserProfileDetails value={lastUser.totalLosses}/>
        </ul>

        <ButtonBar
          passHandleClick={passHandleClick}
          squareUpHandleClick={squareUpHandleClick}
        />
      </div>
    )
  } else {
    return (
      <h1>"No athletes left!"</h1>
    )
  }
};

export default Profile;
