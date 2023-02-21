import React from 'react'
import {MdHomeWork} from 'react-icons/md'
import {FaFacebookF, FaInstagramSquare, FaTwitter, FaWhatsappSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-footer pt-0 pb-10 font-quicksand'>
        <div className='w-[90%] mx-auto grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-0'>
            <div className='flex flex-col'>
                <div className='flex items-center mb-4'>
                    <MdHomeWork className='text-2xl text-primary'/>
                    <h3 className='text-white ml-1 text-2xl font-bold'>Realestate</h3>
                </div>
                <div className='flex space-x-3 text-white text-lg'>
                    <div className='h-10 w-10 p-2 rounded-full bg-primary flex justify-center items-center'>
                        <FaFacebookF />
                    </div>
                    <div className='h-10 w-10 p-2 rounded-full bg-primary flex justify-center items-center'>
                        <FaInstagramSquare />
                    </div>
                    <div className='h-10 w-10 p-2 rounded-full bg-primary flex justify-center items-center'>
                        <FaTwitter />
                    </div>
                    <div className='h-10 w-10 p-2 rounded-full bg-primary flex justify-center items-center'>
                        <FaWhatsappSquare />
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-2xl text-white font-bold mb-4'>Blog</h2>
                <p className='text-white text-base mb-2'>Home Rent</p>
                <p className='text-white text-base mb-2'>For sale</p>
                <p className='text-white text-base mb-2'>For travel</p>
                <p className='text-white text-base mb-2'>For stays</p>
            </div>
            <div>
                <h2 className='text-2xl text-white font-bold mb-4'>Subscribe</h2>
                <p className='text-white w-[80%] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit it amet consectetur.</p>
                <input type="text" className='bg-[#626262] py-4 px-4 w-full rounded placeholder:text-white' placeholder='Your Email'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer