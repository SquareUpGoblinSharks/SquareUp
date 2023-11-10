import React from 'react';

const CenteredWrapper = ({ additionalClasses, children }) => {

  return (
    <div data-testid="centered-wrapper" className={`flex items-center justify-center flex-col h-full w-full bg-inherit ${additionalClasses}`}>{children}
    </div>
  );

};

export default CenteredWrapper;