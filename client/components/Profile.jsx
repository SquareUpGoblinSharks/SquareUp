import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import ButtonBar from "./ButtonBar";
import UserProfileDetails from "./UserProfileDetails";
import { addMatch } from "../state/userSlice";

const Profile = () => {
  const users = useSelector(({ userSlice }) => userSlice.users);

  const [userList, setUserList] = useState(users);

  const dispatch = useDispatch();

  //when there is a stae change in the users set the userList to that new userList
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
    const lastUser = userList[userList.length - 1];
    console.log(lastUser);
    dispatch(addMatch(lastUser));
  };

  //always render the last user on the array of object of the profiles
  const lastUser = userList[userList.length - 1];

  if (lastUser) {
    return (
      <div className="bg-central-blue m-5 p-5 border-2 overflow-scroll max-h-full rounded-lg border-gray-700 h-[90vh]">
        <div className="flex align-center justify-center p-2">
          <h1 className="text-xl font-bold text-white">
            {lastUser.username}
          </h1>
        </div>
        <div className="profilePicture max-w-sm">
          <img
            className="max-w-full	h-auto"
            src="https://i.pinimg.com/originals/69/1d/29/691d293ee7b65eb6b8be210918f24d09.png"
            alt="Next Opponent"
          />
        </div>

        <ul className="grid grid-cols-2 gap-4 text-sm p-4">
          <UserProfileDetails
            title={'Fighting Style'}
            value={lastUser.fightingStyle ? lastUser.fightingStyle : 'N/A'}
            additionalClasses={"col-span-2"}
          />
          <UserProfileDetails title={'Age'} value={lastUser.age ? lastUser.age : 'N/A'} />
          <UserProfileDetails title={'Sex'} value={lastUser.sex ? lastUser.sex : 'N/A'} />
          <UserProfileDetails title={'Weight'} value={lastUser.weight ? lastUser.weight : 'N/A'} />
          <UserProfileDetails title={'Height'} value={lastUser.height ? lastUser.height : 'N/A'} />
          <UserProfileDetails title={'Wins'} value={lastUser.totalWins} />
          <UserProfileDetails title={'Losses'} value={lastUser.totalLosses} />
        </ul>

        <ButtonBar
          passHandleClick={passHandleClick}
          squareUpHandleClick={squareUpHandleClick}
        />
      </div>
    );
  } else {
    return <h1>"No athletes left!"</h1>;
  }
};

export default Profile;
