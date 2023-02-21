import React, { useState } from 'react'
import {MdHomeWork} from 'react-icons/md'

const menu = [
  {id: 0, name: 'Home'},
  {id: 1, name: 'Properties'},
  {id: 2, name: 'Listing'},
  {id: 3, name: 'Services'},
  {id: 4, name: 'About Us'}
]

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(0)

  return (
    <div className='w-[90%] mx-auto h-[70px] sm:flex hidden items-center justify-between relative'>
        <div className='flex items-center'>
            <MdHomeWork className='text-2xl text-primary'/>
            <h3 className='text-white ml-1 text-2xl font-bold'>Realestate</h3>
        </div>
        <div className='flex items-center space-x-24'>
            <nav className='flex text-white space-x-6 text-lg font-medium'>
              {menu.map(item => (
                <a href="#" key={item.id} className='flex flex-col items-center' onClick={() => setActiveMenu(item.id)}>
                  {item.name}
                  {activeMenu === item.id && <div className='w-2 h-2 bg-primary rounded-full'></div>}
                </a>
              ))}
            </nav>
            <button className='bg-primary px-6 py-2 rounded-full text-white font-medium'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
