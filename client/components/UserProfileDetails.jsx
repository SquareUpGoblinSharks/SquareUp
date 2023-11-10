import React from 'react'

const UserProfileDetails = ( {value, title, additionalClasses} ) => {
  return (
    <li className={`flex justify-around items-center bg-blue-100 p-2 rounded-md ${additionalClasses}`}>
      <span className='font-medium text-gray-600'>{title}</span>
      <span className='font-semibold text-gray-800'>{value}</span>
  </li>
  )
}

export default UserProfileDetails