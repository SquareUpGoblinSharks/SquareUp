import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import User from './User';

const Leaderboard = () => {
  const users = useSelector(({ userSlice }) => userSlice.users);

  const [userList, setUserList] = useState(users);
  //trying to have users at 0 be the index of the top 5 so maybe i would only render users.[0-4], figuring out the logic right now
  // const { name, totalWins, totalLosses } = users;

  // console.log('LEADERBOARD', users);

  //sorts users by highest to lowest wins
  useEffect(() => {
    const sortedUsers = [...users]
      .sort((a, b) => b.totalWins - a.totalWins)
    // .slice(0, 7); // Slice the top 5
    setUserList(sortedUsers);
  }, [users]);

  // console.log('LISTOFUSERS', users);

  // if (users.length > 0) {
  //   const sortedUsers = [...users]
  //     .sort((a, b) => b.totalWins - a.totalWins)
  //     .slice(0, 7); // Slice the top 5
  //   setUserList(sortedUsers);
  // }

//   return (
//     <div className='relative bg-dark-slate-green m-5 pl-5 border-2 border-gray-700 rounded-lg'>
//   <h1 className='text-xl font-bold text-white sticky top-0 z-10 bg-dark-slate-green px-4 py-2'>
//     LEADERBOARD
//   </h1>
//   <div className='mt-14 overflow-auto max-h-[calc(100vh-10rem)]'>
//     <ul className='pr-5'>
//       {userList.map((user, index) => {
//         return (
//           <User
//             key={index}
//             name={user.name}
//             totalWins={user.totalWins}
//             totalLosses={user.totalLosses}
//           />
//         )
//       })}
//     </ul>
//   </div>
// </div>

//   )

  return (
    <div className='relative bg-dark-slate-green m-5 pl-5 border-2 border-gray-700  h-[90vh] rounded-lg overflow-hidden min-w-fit'>
        <h1 className='text-xl font-bold text-white bg-dark-slate-green p-2 px-4 sticky top-0 z-10'>LEADERBOARD</h1>
        <div className='overflow-auto max-h-[calc(100vh-1rem)]'>
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
