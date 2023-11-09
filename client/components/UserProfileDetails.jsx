import React from 'react'

const UserProfileDetails = ( {value, additionalClasses} ) => {
  return (
    <li className={`flex justify-around items-center bg-blue-100 p-2 rounded-md ${additionalClasses}`}>
      <span className='font-medium text-gray-600'>Fighting Style:</span>
      <span className='font-semibold text-gray-800'>{value}</span>
  </li>
  )
}

export default UserProfileDetails