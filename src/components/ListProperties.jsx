import React from 'react'
import Property from './Property'

const ListProperties = () => {
  return (
    <div className='grid sm:grid-cols-3 grid-cols-1 gap-8'>
        <Property />
        <Property />
        <Property />
    </div>
  )
}

export default ListProperties
