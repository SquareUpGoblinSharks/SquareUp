import React from 'react';
import Profile from './Profile.jsx';
import Button from './Button.jsx';

const ButtonBar = ({ passHandleClick }) => {
  return (
    <div className="buttonBar">
      <button id="pass" onClick={passHandleClick}>
        PASS
      </button>
      <button id="maybe">MAYBE</button>
      <button id="squareUp">SQUARE UP</button>
      <Button />
    </div>
  );
};

export default ButtonBar;
