import React from 'react';

const Button = ({value, onClickFunc, primary, type, additionalClasses}) => {
  // Adding for testing - will remove later
  // if (!onClickFunc) onClickFunc = () => alert('Clicked');
  if (!value) value = 'placeholder';
  if (primary === undefined) primary = false;
  return (
    <button
      className={`${primary ? 'bg-jade hover:bg-kelly-green': 'bg-myrtle-green hover:bg-sea-green'} text-white font-bold py-2 px-4 m-2 rounded ${additionalClasses}`}
      onClick={onClickFunc}
      type={type ? type : 'button'}
    >{value}
    </button>
  );
};

export default Button;
