import React from 'react';

const CenteredWrapper = ({ children }) => {

  return (
    <div className={'flex items-center justify-center flex-col h-full w-full'}>{children}
    </div>
  );

};

export default CenteredWrapper;