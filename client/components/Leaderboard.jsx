import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import User from './User';

const Leaderboard = () => {
  const users = useSelector(({ userSlice }) => userSlice.users);

  const [userList, setUserList] = useState(users);

  useEffect(() => {
    const sortedUsers = [...users]
      .sort((a, b) => b.totalWins - a.totalWins)
    // .slice(0, 7); // Slice the top 5
    setUserList(sortedUsers);
  }, [users]);

  return (
    <div className='relative bg-dark-slate-green m-5 pl-5 border-2 border-gray-700  h-[90vh] rounded-lg overflow-auto min-w-fit'>
        <h1 className='text-xl font-bold text-white bg-dark-slate-green p-2 px-4 sticky top-0 z-10'>LEADERBOARD</h1>
        <div className=''>
          <ul className='pr-5'>
          {userList.map( (user, index) => {
              return (
                <User
                  key={index}
                  champ={index === 0 ? true: false}
                  name={user.name}
                  totalWins={user.totalWins}
                  totalLosses={user.totalLosses}
                />
              )
            })}
          </ul>
        </div>
      </div>
  );
};

export default Leaderboard;
