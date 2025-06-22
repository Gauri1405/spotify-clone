import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Navigation Bar */}
      <div className='w-full flex justify-between items-center font-semibold'>
        {/* Navigation Arrows */}
        <div className='flex items-center gap-2'>
          <img
            onClick={() => navigate(-1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_left}
            alt='Go Back'
          />
          <img
            onClick={() => navigate(1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_right}
            alt='Go Forward'
          />
        </div>

        {/* Buttons & Profile */}
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
            Explore Premium
          </p>
          <p className='bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
            Install App
          </p>
          <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>
            G
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
      </div>
    </div>
  );
};

export default Navbar;
