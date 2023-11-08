import React, { forwardRef } from 'react'

// forwardRef lets you pass ref to a child and lets parent nodes have access to the actual DOM
// ref is an obj/func
// Here, React Hook Form is populating ref for us (and you can see it if you console.log it)
// I *think* this is how React Hook Form prevents unnecessary re-renders because under the hood, they're using the useRef hook
// other use cases for ref are if you need the parent elem to be able to focus the child
// https://react.dev/reference/react/useRef#referencing-a-value-with-a-ref
const FormInput = forwardRef(
  ({ ...props }, ref) => {
    // console.log(ref);
    return (
      <input
        {...props}
        ref={ref}
        className='m-1 rounded border-2'
      />
    )
  }
);

export default FormInput