import React from 'react'

const User = ({ name, totalWins, totalLosses, champ }) => {
  if (champ) {
    return (
      <li className='flex justify-between	items-center text-yellow-400 border-b-4 border-b-yellow-400' >
        <div className='flex'>
          <img className='max-h-6' src="https://static.vecteezy.com/system/resources/previews/020/033/055/original/golden-crown-for-king-and-queen-and-success-on-transparent-background-free-png.png" alt="" />
          <span className='font-extrabold'>{name}</span>
        </div>
        <span className='font-medium'>{`${totalWins} W - ${totalLosses} L`}</span>
      </li>
    )
  }
  return (
    <li className='flex justify-between	items-center text-slate-300	m-2 border-b'>
      <span className='font-extrabold'>{name}</span>
      <span className='font-medium'>{`${totalWins} W - ${totalLosses} L`}</span>
    </li>
  )
}

export default User