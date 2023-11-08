import React from 'react'

// Not sure what forwardRef and ref are doing
const FormInput = React.forwardRef(
  ({...props}, ref) => {
    console.log(ref);
    return (
      <input
        {...props}
        // innerRef={'ref'}
        ref={ref}
        className=''
      />
    )
  }
);

export default FormInput