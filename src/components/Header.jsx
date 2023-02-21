import React from 'react'
import Navbar from './Navbar'
import BackgroundEstate from '../assets/background-estate.jpg'
import {IoIosPin} from 'react-icons/io'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'



const Header = () => {
  return (
    <header className='h-screen w-full font-quicksand flex flex-col relative gap-8 items-center'>
        <img src={BackgroundEstate} alt="" className='w-full h-full object-cover absolute left-0 top-0 brightness-50'/>
        <Navbar />
        <div className='flex-1 flex flex-col justify-center items-center relative'>
            <div className='w-[70%] text-center mb-16'>
                <h2 className='text-5xl font-bold text-white'>Find your next perfect place with easy way</h2>
            </div>
            <div className='w-[90%] bg-white h-24 rounded-full p-2 pl-8 sm:flex hidden items-center justify-between'>
                <div className='flex flex-col border-r border-gray-400'>
                    <div className='flex items-center space-x-1 font-bold text-gray-900 text-xl'>
                        <h5 className='mb-1'>Locations</h5>
                        <IoIosPin className='mb-1' />
                    </div>
                    <input type="text" placeholder='Madrid, Spain.' className='text-gray-400 focus:outline-none'/>
                </div>
                <div className='flex flex-col border-r border-gray-400'>
                    <div className='flex items-center space-x-1 font-bold text-gray-900 text-xl'>
                        <h5 className='mb-1'>Budgets</h5>
                        <RiMoneyDollarCircleFill className='mb-1' />
                    </div>
                    <input type="text" placeholder='$20,000.00' className='text-gray-400 focus:outline-none'/>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center space-x-1 font-bold text-gray-900 text-xl'>
                        <h5 className='mb-1'>Type of home</h5>
                        <AiFillHome className='mb-1'/>
                    </div>
                    <input type="text" placeholder='Matrimonial' className='text-gray-400 focus:outline-none'/>
                </div>
                <div className='h-[5rem] bg-primary w-[5rem] rounded-full flex justify-center items-center'>
                    <AiOutlineSearch className='text-3xl text-white'/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
