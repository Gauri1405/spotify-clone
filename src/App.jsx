// src/App.jsx
import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <div className="h-[10%] relative">
        <Player />
        {/* Audio element controlled via context */}
        <audio ref={audioRef} src={track.file} preload="auto" />
      </div>
    </div>
  );
};

export default App;

