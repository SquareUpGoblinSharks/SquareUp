import React from 'react';
import Profile from './Profile.jsx';
import Leaderboard from './Leaderboard.jsx';
import UpcomingMatches from './UpcomingMatches';
import ButtonBar from './ButtonBar.jsx';

const HomePage = () => {
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <Leaderboard />
      </div>
      <div className="middleContainer">
        <Profile />
        <ButtonBar />
      </div>
      <div className="rightContainer">
        <UpcomingMatches />
      </div>
    </div>
  );
};

export default HomePage;
