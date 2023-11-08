import React from 'react';

const Button = ({ value, onClickFunc, primary }) => {
  // Adding for testing - will remove later
  // if (!onClickFunc) onClickFunc = () => alert('Clicked');
  if (!value) value = 'placeholder';
  if (primary === undefined) primary = false;
  return (
    <button
      className={`${
        primary
          ? 'bg-blue-600 hover:bg-blue-400'
          : 'bg-blue-300 hover:bg-blue-100'
      } text-white font-bold py-2 px-4 rounded`}
      onClick={onClickFunc}
    >
      {value}
    </button>
  );
};

export default Button;
