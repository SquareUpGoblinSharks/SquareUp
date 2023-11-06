import React from 'react';
import Profile from '../../Profile';

const HomePage = () => {
  return (
    <>
      <div className="middleContainer">
        HOME PAGE ROUTE
        <Profile />
      </div>

      <div className="leaderboardContainer">
        {/* <Leaderboard />
      <ButtonBar /> */}
      </div>
    </>
  );
};

export default HomePage;
