import React from 'react';
import { useSelector } from 'react-redux';

const UpcomingMatches = () => {
  return (
    <div  className='bg-dark-slate-green m-5 p-5 border-2 border-gray-700 overflow-scroll h-[90vh] rounded-lg'>
      <div className="upcomingMatches">
        <h2>UPCOMING MATCHES</h2>

        <table>
          <thead>
            <tr>
              <th id="name">Name</th>
              <th id="winloss">W/L</th>
            </tr>
          </thead>

          <tbody id="leaderBoardBody"></tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingMatches;
