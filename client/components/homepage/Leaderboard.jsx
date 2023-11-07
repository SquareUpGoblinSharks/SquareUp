import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Leaderboard = () => {
  const users = useSelector(({ userSlice }) => userSlice.users);

  const [userList, setUserList] = useState(users);
  //trying to have users at 0 be the index of the top 5 so maybe i would only render users.[0-4], figuring out the logic right now
  // const { name, totalWins, totalLosses } = users;

  console.log('LEADERBOARD', users);

  //sorts users by highest to lowest wins
  useEffect(() => {
    const sortedUsers = [...users]
      .sort((a, b) => b.totalWins - a.totalWins)
      .slice(0, 7); // Slice the top 5
    setUserList(sortedUsers);
  }, [users]);

  console.log('LISTOFUSERS', users);

  return (
    <>
      <div className="leaderboard">
        <h1>LEADERBOARD</h1>
        <div id="leaderboardContainer">
          <table>
            <thead>
              <tr></tr>
            </thead>

            <tbody id="leaderBoardBody"></tbody>
            {userList.map((user, index) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>WINS: {user.totalWins}</td>
                <td>LOSS: {user.totalLosses}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
