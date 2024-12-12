import React from 'react'
import right from '../../assests/icons/right-arrow.png'
import left from '../../assests/icons/left-arrow.png'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='flex items-center justify-between w-full font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className="w-8 p-2 bg-black cursor-pointer rounded-2xl" src={left} alt='left' />
            <img onClick={()=>navigate(1)} className="w-8 p-2 bg-black cursor-pointer rounded-2xl" src={right} alt='rightarrow' />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <p className='px-3 py-1 bg-black rounded-2xl text-[15px]'>Install App</p>
            <p className='flex items-center justify-center text-black bg-purple-500 rounded-full w-7 h-7'>M</p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <p className='px-4 py-1 text-black bg-white cursor-pointer rounded-2xl'>All</p>
        <p className='px-4 py-1 bg-black cursor-pointer rounded-2xl'>Music</p>
        <p className='px-4 py-1 bg-black cursor-pointer rounded-2xl'>Podcasts</p>
    </div>
    </>
  );
}

export default Navbar