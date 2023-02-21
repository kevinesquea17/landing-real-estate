import React from 'react'

const Heading = ({title, subtitle, isNew}) => {
  return (
    <div className='w-fit mb-8'>
      <div className='relative w-fit'>
        <h2 className='text-gray-900 text-4xl font-bold'>{title}</h2>
        {isNew && <p className='px-2 py-1 bg-primary rounded-full absolute text-white font-bold text-sm -top-3 -right-12'>New</p>}
      </div>
      <p className='mt-2 text-2xl text-gray-400'>{subtitle}</p>
    </div>
  )
}

export default Heading