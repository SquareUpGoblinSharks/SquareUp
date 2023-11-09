import React from 'react';
import Profile from './Profile.jsx';
import Button from './Button.jsx';

const ButtonBar = ({ passHandleClick }) => {
  return (
    <div className="flex justify-around">
      <Button 
        value={'SQUARE UP'}
        primary={true}
      />
      <Button 
        onClickFunc={passHandleClick}
        value={'PASS'}
        primary={false}
      />
    </div>
  );
};

export default ButtonBar;
