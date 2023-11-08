import React from 'react';

const HexGreenBGWrapper = ({ children }) => {

  return (
    <div className={'h-full w-full bg-hexagons bg-squareup-teal'}>
      {children}
    </div>
  );

};

export default HexGreenBGWrapper;