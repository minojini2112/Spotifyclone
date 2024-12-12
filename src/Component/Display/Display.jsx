import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "../Display/DisplayHome";
import DisplayAlbum from './DisplayAlbum';
import { albumdata } from '../../assests/assests';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? Number(location.pathname.split('/').pop()) : null;

  useEffect(() => {
    if (isAlbum && albumdata[albumId]) {
      displayRef.current.style.background = `linear-gradient(${albumdata[albumId].bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = '#121212';
    }
  }, [isAlbum, albumId]);

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
