import React from 'react';

const BackgroundWrapper = ({ children }) => {

  return (
    <div data-testid="background-wrapper" className={'h-full w-full bg-slate-100'}>
      {children}
    </div>
  );

};

export default BackgroundWrapper;