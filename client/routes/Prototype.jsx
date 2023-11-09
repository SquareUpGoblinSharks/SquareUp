import React from 'react'
import CenteredWrapper from '../components/CenteredWrapper';
import BackgroundWrapper from '../components/BackgroundWrapper'
import Button from '../components/Button';

const Prototype = props => {
  /*
  Colors from: https://coolors.co/395e66-387d7a-32936f-26a96c-2bc016
    #2BC016
    #26A96C
    #32936F
    #387D7A
    #395E66
  */
  return (
    <div className=''>
      <button className='bg-jade hover:bg-kelly-green text-white font-bold py-2 px-4 m-2 rounded shadow-lg '>Primary</button>
      <button className='bg-myrtle-green hover:bg-sea-green text-white font-bold py-2 px-4 m-2 rounded shadow-cyan-lg'>Secondary</button>
    </div>
  )
}

export default Prototype;