import React from 'react';
import Profile from './Profile.jsx';

const ButtonBar = ({ passHandleClick }) => {
  return (
    <div className="buttonBar">
      <button id="pass" onClick={passHandleClick}>
        PASS
      </button>
      <button id="maybe">MAYBE</button>
      <button id="squareUp">SQUARE UP</button>
    </div>
  );
};

export default ButtonBar;
