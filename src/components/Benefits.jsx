import React from 'react'
import Special02 from '../assets/special-02.jpg'
import Person01 from '../assets/person-01.avif'
import Person02 from '../assets/person-02.jpg'
import Person03 from '../assets/person-03.jpg'
import {AiFillStar} from 'react-icons/ai'
import Heading from './Heading'
import {FcSalesPerformance, FcAlarmClock, FcHome} from 'react-icons/fc'

const Benefits = () => {
  return (
    <section className='bg-background pb-10 font-quicksand'>
        <div className='w-[90%] mx-auto flex sm:flex-row flex-col-reverse gap-12'>
            <div className='sm:w-[40%] w-full relative flex justify-center'>
                <img src={Special02} alt="" className='h-[600px] object-cover rounded-xl' />
                <div className='absolute shadow-sm bottom-5 p-4 bg-white w-[90%] left-[5%] rounded flex justify-between items-center'>
                    <div>
                        <h3 className='text-2xl font-bold'>40K Happy Client</h3>
                        <div className='flex space-x-2 items-center'>
                            <AiFillStar className='text-secondary text-lg' />
                            <p className='text-gray-400'>4.5 Reviews</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={Person01} alt="" className='w-12 h-12 object-cover border-[1px] border-gray-400 rounded-full'/>
                        <img src={Person02} alt="" className='w-12 h-12 object-cover border-[1px] border-gray-400 rounded-full -ml-4'/>
                        <img src={Person03} alt="" className='w-12 h-12 object-cover border-[1px] border-gray-400 rounded-full -ml-4'/>
                    </div>
                </div>
            </div>
            <div className='sm:w-[60%] w-full'>
                <Heading  title='Special Advantage' subtitle='Benefits you get when using our services.' isNew={true}/>
                <div className='bg-primary p-4 mt-10 rounded pr-12 flex gap-8 mb-8'>
                    <div className='h-24 w-24 bg-white rounded flex justify-center items-center'>
                        <FcSalesPerformance className='h-12 w-12'/>
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-4xl font-semibold text-white mb-2'>Lowest Commission</h2>
                        <p className='text-base text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum office sit amet consectetur.</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg p-4 mt-12 rounded pr-12 flex gap-8 mb-6'>
                    <div className='h-24 w-24 bg-secondary rounded flex justify-center items-center'>
                        <FcHome className='h-12 w-12'/>
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-4xl font-semibold text-gray-900 mb-2'>Property Insurance</h2>
                        <p className='text-base text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum office sit amet consectetur.</p>
                    </div>
                </div>
                <div className='bg-white shadow-lg p-4 mt-12 rounded pr-12 flex gap-8'>
                    <div className='h-24 w-24 bg-secondary rounded flex justify-center items-center'>
                        <FcAlarmClock className='h-12 w-12'/>
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-4xl font-semibold text-gray-900 mb-2'>24/7 Customers Support</h2>
                        <p className='text-base text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum office sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits