import React from "react";
import { useSelector } from "react-redux";

const UpcomingMatches = () => {
  const matches = useSelector(({ userSlice }) => userSlice.upcomingMatches);
  // console.log(matches);
  const matchElems = matches.map((element) => {
    // console.log("hello from forEach", element.name);
    return (
      <div className={"flex justify-between"} key={crypto.randomUUID()}>
        <div className="font-medium text-white">{element.name}</div>
        <div className="font-medium text-white">
          {element.totalWins}/{element.totalLosses}
        </div>
      </div>
    );
  });
  // console.log(matchElems);
  return (
    <div className="bg-dark-slate-green m-5 p-5 border-2 border-gray-700 overflow-scroll h-[90vh] rounded-lg">
      <div className="upcomingMatches">
        <h2 className="text-xl font-bold text-white bg-dark-slate-green p-2 px-4 sticky top-0 z-10">
          UPCOMING MATCHES
        </h2>
        <div id="wrapper" className={"flex flex-col"}>
          <div id="header-wrapper" className={"flex justify-between"}>
            <div className="font-extrabold text-white">Name</div>
            <div className="font-extrabold text-white">W/L</div>
          </div>
          <div id="matches" className={"flex flex-col"}>
            {matchElems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMatches;
