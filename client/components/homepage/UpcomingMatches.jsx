import React from 'react';

const UpcomingMatches = () => {

  
  return (
    <>
    <div className='upcomingMatches'>
      <h2>UPCOMING MATCHES</h2>
      <div id="upcomingMatchesContainer">
        <table>
          <thead>
            <tr>
              <th id="name">Name</th>
              <th id="winloss">W/L</th>
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

export default UpcomingMatches;
