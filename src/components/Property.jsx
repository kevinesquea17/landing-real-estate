import React from 'react'
import RealEstate01 from '../assets/real-estate-01.jpg'
import {FaBed, FaBath} from 'react-icons/fa'
import {TbHome} from 'react-icons/tb'

const Property = () => {
  return (
    <div className='bg-white p-2 pb-4 shadow-sm rounded'>
        <div className='relative mb-4'>
            <img src={RealEstate01} alt="" className='rounded' />
            <p className='bg-secondary px-3 py-1 rounded-full text-white absolute left-3 top-3'>For Rent</p>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>$30,000 USD / Year</h3>
            <h2 className='text-2xl font-bold text-gray-900'>General House</h2>
            <p className='text-gray-400 mb-4'>Lorem ipsum dolor sit amet consectetur amet.</p>
            <div className='h-[1px] bg-gray-200 mb-3'></div>
            <div className='flex items-center justify-between'>
                <div className='flex space-x-1 items-center'>
                    <FaBed className='text-primary text-lg'/>
                    <p className='text-sm text-gray-600'>Bedrooms: 2</p>
                </div>
                <div className='flex space-x-1 items-center'>
                    <FaBath className='text-primary text-lg'/>
                    <p className='text-sm text-gray-600'>Bathrooms: 1</p>
                </div>
                <div className='flex space-x-1 items-center'>
                    <TbHome className='text-primary text-lg'/>
                    <p className='text-sm text-gray-600'>Floors: 2</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Property