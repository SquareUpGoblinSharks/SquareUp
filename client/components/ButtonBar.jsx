import React from 'react';
import Profile from './Profile.jsx';
import Button from './Button.jsx';

const ButtonBar = ({ passHandleClick }) => {
  return (
    <div className="buttonBar">
      <Button 
        value={'SQUARE UP'}
        primary={false}
      />
      <Button 
        onClickFunc={passHandleClick}
        value={'PASS'}
        primary={false}
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
