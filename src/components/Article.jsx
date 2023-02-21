import React from 'react'
import Article01 from '../assets/article-01.jpg'
import Person03 from '../assets/person-03.jpg'
import {BsArrowUpRight} from 'react-icons/bs'

const Article = () => {
  return (
    <div className='bg-white p-2 pb-4 rounded shadow-sm'>
        <img src={Article01} alt="" className='rounded h-60 w-full object-cover mb-3' />
        <h3 className='text-xl text-gray-900 font-bold mb-3'>Top 10 World Best Place to Live in Rent Home.</h3>
        <div className='flex justify-between items-center mb-3'>
            <div className='flex space-x-2 items-center'>
                <img src={Person03} alt="" className='w-8 h-8 rounded-full object-cover' />
                <h6 className='text-gray-900 text-base font-medium'>Salma Doe</h6>
            </div>
            <h4 className='text-gray-400'>16 enero 2023</h4>
        </div>
        <button className='px-5 py-2 bg-primary rounded-full text-white font-medium flex items-center'>
            Read More
            <BsArrowUpRight className='ml-2'/>
        </button>
    </div>
  )
}

export default Article