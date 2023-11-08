import React from 'react';

const BackgroundWrapper = ({ children }) => {

  return (
    <div className={'h-full w-full bg-slate-100'}>
      {children}
    </div>
  );

};

export default BackgroundWrapper;