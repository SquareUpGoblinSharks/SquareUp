import React from 'react';

const Leaderboard = () => {

  
  return (
    <>
    <div className='leaderboard'>
      <h1>LEADERBOARD</h1>
      <div id="leaderboardContainer">
        <table>
          <thead>
            <tr>
              <th id="profileIcon"></th>
              <th id="name">Name</th>
              <th id="city">City</th>
              <th id="rank">Rank</th>
            </tr>
          </thead>

          <tbody id="leaderBoardBody">
          </tbody>

        </table>
      </div>
    </div>
    </>
  );
};

export default Leaderboard;