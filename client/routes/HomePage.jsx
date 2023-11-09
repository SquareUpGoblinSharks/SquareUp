import React from 'react';
import Profile from '../components/Profile.jsx';
import Leaderboard from '../components/Leaderboard.jsx';
import UpcomingMatches from '../components/UpcomingMatches';
import ButtonBar from '../components/ButtonBar.jsx';
import LogoutAndEdit from '../components/LogoutAndEdit.jsx';

import HexGreenBGWrapper from '../components/HexGreenBGWrapper.jsx';
import CenteredWrapper from '../components/CenteredWrapper.jsx';
import useAuth from '../lib/useAuth.js';

// useEffect(() => {

// }, [Profile])

const HomePage = () => {
  useAuth(null, '/Login');
  return (
    <HexGreenBGWrapper>
      <CenteredWrapper>
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
      </CenteredWrapper>
    </HexGreenBGWrapper>

  );
};

export default HomePage;
