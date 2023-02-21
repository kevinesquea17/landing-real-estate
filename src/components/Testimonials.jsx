import React from 'react'
import Person04 from '../assets/person-04.jpg'
import Person03 from '../assets/person-03.jpg'
import Person02 from '../assets/person-02.jpg'
import Person01 from '../assets/person-01.avif'

const Testimonials = () => {
  return (
    <section className='bg-[#F3F6FF] py-20 font-quicksand'>
        <div className='w-[90%] mx-auto flex flex-col items-center relative'>
            <div className='text-center mb-16'>
                <h2 className='text-gray-900 text-4xl font-bold'>Testimonial</h2>
                <p className='mt-2 text-2xl text-gray-400'>What our client says about us!</p>
            </div>
            <img src={Person04} alt="" className='w-32 h-32 rounded-full object-cover mb-10'/>
            <p className='sm:px-56 px-0 text-center text-gray-500 font-medium mb-10'>" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus suscipit aut dignissimos eius facere labore, velit ad nobis culpa cumque veniam tenetur corporis id sit? Eius facilis earum, voluptates delectus culpa aliquid aliquam minus dolores aperiam error officiis vero corporis sapiente praesentium quas. Cupiditate nobis at facere cum impedit laborum. The Best 😍 "</p>
            <div className='text-center'>
                <h3 className='font-bold text-2xl text-gray-900'>Ankur Agarwal</h3>
                <p className='text-gray-400 text-lg'>Footballer</p>
            </div>
            <img src={Person03} alt="" className='absolute w-14 h-14 rounded-full object-cover left-20 top-20 border-[2px] border-secondary' />
            <img src={Person02} alt="" className='absolute w-12 h-12 rounded-full object-cover sm:left-40 left-5 top-44 border-[2px] border-secondary' />
            <img src={Person01} alt="" className='absolute w-14 h-14 rounded-full object-cover sm:left-24 left-2 bottom-0 border-[2px] border-secondary' />
            <img src={Person01} alt="" className='absolute w-14 h-14 rounded-full object-cover right-20 top-20 border-[2px] border-secondary' />
            <img src={Person03} alt="" className='absolute w-12 h-12 rounded-full object-cover sm:right-40 right-5 top-44 border-[2px] border-secondary' />
            <img src={Person01} alt="" className='absolute w-14 h-14 rounded-full object-cover sm:right-24 right-2 bottom-0 border-[2px] border-secondary' />
        </div>
    </section>
  )
}

export default Testimonials