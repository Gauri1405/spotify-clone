import React, { useContext } from 'react';
import { assets } from "../assets/assets";
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time ,previous,next,seekSong } = useContext(PlayerContext);

  return (
    <div className='fixed bottom-0 left-0 right-0 h-[10%] bg-black text-white z-50 px-6 py-3 flex justify-between items-center'>

      {/* Left: Song Info */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12 h-12 object-cover' src={track.image} alt="Song" />
        <div>
          <p className='text-sm font-semibold'>{track.name}</p>
          <p className='text-xs text-gray-400'>{track.desc?.slice(0, 12)}</p>
        </div>
      </div>

      {/* Center: Playback Controls */}
      <div className='flex flex-col items-center gap-2'>
        <div className='flex gap-5 items-center'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
          <img  onClick={previous}className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />

          {!playStatus ? (
            <img onClick={play} className='w-6 cursor-pointer' src={assets.play_icon} alt="Play" />
          ) : (
            <img onClick={pause} className='w-6 cursor-pointer' src={assets.pause_icon} alt="Pause" />
          )}

          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
        </div>

        {/* Progress Bar */}
        <div className='flex items-center gap-4 w-full'>
          <span className='text-xs'>
            {String(time.currentTime?.minute || 0).padStart(2, '0')}:
            {String(time.currentTime?.second || 0).padStart(2, '0')}
          </span>

          <div ref={seekBg} onClick={seekSong} className='w-[40vw] max-w-[400px] h-1 bg-gray-600 rounded-full cursor-pointer relative'>
            <div ref={seekBar} className='w-[40%] h-full bg-green-500 rounded-full'></div>
          </div>

          <span className='text-xs'>
            {String(time.totalTime?.minute || 0).padStart(2, '0')}:
            {String(time.totalTime?.second || 0).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Right: Extra Controls */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-4' src={assets.plays_icon} alt="Plays" />
        <img className='w-4' src={assets.mic_icon} alt="Mic" />
        <img className='w-4' src={assets.queue_icon} alt="Queue" />
        <img className='w-4' src={assets.speaker_icon} alt="Speaker" />

        {/* Volume Bar */}
        <div className='w-24 h-1 bg-gray-400 rounded-full relative'>
          <div className='w-[50%] h-full bg-white rounded-full'></div>
        </div>

        <img className='w-4' src={assets.mini_player_icon} alt="Devices" />
        <img className='w-4' src={assets.zoom_icon} alt="Fullscreen" />
      </div>
    </div>
  );
};

export default Player;
