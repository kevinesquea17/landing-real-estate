import React from 'react'

const CallToAction = () => {
  return (
    <section className='bg-footer py-20 font-quicksand'>
        <div className='w-[90%] mx-auto flex flex-col sm:items-center'>
            <h2 className='text-white text-5xl font-bold mb-4 text-center sm:text-left'>Ready to get started?</h2>
            <p className='text-white text-xl mb-12 text-center sm:text-left'>To join the worldwide community.</p>
            <div className='sm:w-[60%] e-full py-2 pl-6 pr-2 h-[4.5rem] bg-white rounded-full flex items-center'>
                <input type="text" placeholder='Enter your email' className='h-full flex-1 focus:outline-none '/>
                <button className='h-[4rem] w-36 py-2 px-4 rounded-full bg-primary text-white'>Join Now</button>
            </div>
            <div className='w-full h-[1px] bg-gray-400 mt-20'></div>
        </div>
    </section>
  )
}

export default CallToAction