import React from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import ListProperties from './ListProperties'
import Heading from './Heading'

const Featured = () => {
  return (
    <section className='bg-background py-20 font-quicksand'>
        <div className='w-[90%] mx-auto'>
            <div className='flex justify-between sm:flex-row flex-col items-center mb-6'>
                <Heading  title='Featured Properties' subtitle='Find the best deal for your future property.' isNew={true}/>
                <div className='flex space-x-4'>
                    <div className='bg-gray-300 p-2 rounded shadow-sm'>
                        <AiOutlineLeft />
                    </div>
                    <div className='bg-primary p-2 rounded shadow-sm'>
                        <AiOutlineRight className='text-white'/>
                    </div>
                </div>
            </div>
            <ListProperties/>
        </div>
    </section>
  )
}

export default Featured
