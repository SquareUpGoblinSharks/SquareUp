import React from 'react';
import Profile from './Profile.jsx';
import Leaderboard from './Leaderboard.jsx';
import UpcomingMatches from './UpcomingMatches';
import ButtonBar from './ButtonBar.jsx';
import LogoutAndEdit from './LogoutAndEdit.jsx'

// useEffect(() => {

// }, [Profile])

const HomePage = () => {
  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <Leaderboard />
      </div>
      <div className="middleContainer">
        <Profile />
        {/* <ButtonBar /> */}
      </div>
      <div className="rightContainer">
        <LogoutAndEdit />
        <UpcomingMatches />
      </div>
    </div>
  );
};

export default HomePage;
