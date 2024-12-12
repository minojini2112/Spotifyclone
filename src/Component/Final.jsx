import React, { useContext } from 'react'
import Sidebar from './Sidebar/Sidebar';
import Player from './Player/Player';
import Display from './Display/Display';
import {PlayerContext} from '../Context/PlayerContext'

const Final = () => {
  const {audioRef,Track} = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
              <Sidebar/>  
              <Display/>
        </div>
        <div>
          <Player/>
          <audio ref={audioRef} src={Track.file} preload='auto'></audio>
        </div>
    </div>
  );
}

export default Final
