import React from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import Heading from './Heading'
import ListArticles from './ListArticles'

const Blog = () => {
  return (
    <section className='bg-background py-20 font-quicksand'>
        <div className='w-[90%] mx-auto'>
            <div className='flex justify-between items-center mb-6'>
                <Heading  title='Our Blog' subtitle='Check our latest blog about housing.'/>
                <div className='flex space-x-4'>
                    <div className='bg-gray-300 p-2 rounded shadow-sm'>
                        <AiOutlineLeft />
                    </div>
                    <div className='bg-primary p-2 rounded shadow-sm'>
                        <AiOutlineRight className='text-white'/>
                    </div>
                </div>
            </div>
            <ListArticles />
        </div>
    </section>
  )
}

export default Blog