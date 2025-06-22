import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    
    <div className='w-[25%] h-screen p-2 flex flex-col gap-2 text-white hidden lg:flex overflow-y-auto pb-24'>
      {/* Home & Search Section */}
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div  onClick={()=>navigate('/')}className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt="" />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt="" />
          <p className='font-bold'>Search</p>
        </div>
      </div>

      {/* Your Library Section */}
      <div className='bg-[#121212] h-full w-full rounded p-4 flex flex-col gap-4'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="" />
            <img className='w-5' src={assets.plus_icon} alt="" />
          </div>
        </div>

        {/* Playlist Box */}
        <div className='bg-[#242424] p-4 rounded font-semibold flex flex-col items-start justify-center'>
          <p>Create your first playlist</p>
          <p className='text-sm font-normal pt-2'>it's easy we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 border-none outline-none focus:outline-none'>
            Create Playlist
          </button>
        </div>

        {/* Podcast Box */}
        <div className='bg-[#242424] p-4 rounded font-semibold flex flex-col items-start justify-center'>
          <p>Let's findsome podcasts to follow</p>
          <p className='text-sm font-normal pt-2'>we'll keep you update on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
