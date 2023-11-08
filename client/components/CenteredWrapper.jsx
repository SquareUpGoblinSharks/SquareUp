import React from 'react';

const CenteredWrapper = ({ additionalClasses, children }) => {

  return (
    <div className={`flex items-center justify-center flex-col h-full w-full ${additionalClasses}`}>{children}
    </div>
  );

};

export default CenteredWrapper;