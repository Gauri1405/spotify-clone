// src/context/PlayerContext.jsx

import React, { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

// ✅ Named export of context
export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const audioRef = useRef();
  const seekBar = useRef();
  const seekBg = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { minute: 0, second: 0 },
    totalTime: { minute: 0, second: 0 },
  });

  const play = () => {
    audioRef.current?.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlayStatus(false);
  };
   const playWithId = async (id) => {
  await setTrack(songsData[id]);
  await audioRef.current.play();
  setPlayStatus(true);
};
const next = async () => {
  if (track.id < songsData.length - 1) {
    await setTrack(songsData[track.id + 1]);
    await audioRef.current.play();
    setPlayStatus(true);
  }
};
   const seekSong = (e) => {
     audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)* audioRef.current.duration);

  }


  useEffect(() => {
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = () => {
            seekBar.current.style.width = `${Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100)}%`;


          setTime({
            currentTime: {
              second: Math.floor(audioRef.current.currentTime % 60),
              minute: Math.floor(audioRef.current.currentTime / 60),
            },
            totalTime: {
              second: Math.floor(audioRef.current.duration % 60),
              minute: Math.floor(audioRef.current.duration / 60),
            },
          });
        };
      }
    }, 1000);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithId,next,
        seekSong
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

// ✅ Default export of the provider
export default PlayerProvider;
