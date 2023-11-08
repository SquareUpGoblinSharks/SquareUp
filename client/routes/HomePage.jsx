import React from 'react';
import Profile from '../components/Profile.jsx';
import Leaderboard from '../components/Leaderboard.jsx';
import UpcomingMatches from '../components/UpcomingMatches';
import ButtonBar from '../components/ButtonBar.jsx';
import LogoutAndEdit from '../components/LogoutAndEdit.jsx';

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
