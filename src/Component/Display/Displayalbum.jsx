import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumdata, songsData } from '../../assests/assests';
import logo from '../../assests/icons/spotify.png';
import clock from '../../assests/icons/clock.png';
import { PlayerContext } from '../../Context/PlayerContext';

const DisplayAlbum = () => {
  const { id } = useParams();
  const album = albumdata[id];
  const {Playid}= useContext(PlayerContext)

  if (!album) return <p>Album not found.</p>;

  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-8 mt-10 md:flex-row md:items-end'>
        <img className="w-48 rounded" src={album.image} alt="Album cover" />
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='mb-4 text-5xl font-bold md:text-7xl'>{album.name}</h2>
          <h4>{album.desc}</h4>
          <p className='mt-1'>
            <img className='inline-block w-5' src={logo} alt="Spotify logo" />
            <b>Spotify</b>
            . 1,323,154 likes . <b>50 songs,</b> about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 pl-2 mt-4 mb-4 sm:grid-cols-4 text-[#a7a7a7]'>
        <p><b className='mr-4'>Title</b></p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='w-4 m-auto' src={clock} alt="Clock icon" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div onClick={()=>Playid(item.id)} key={index} className='grid items-center grid-cols-3 gap-2 p-2 sm:grid-cols-4 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
          <p className='text-white'>
            <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
            <img className='inline w-10 mr-5' src={item.image} alt="" />
            {item.name}
          </p>
          <p className='text-[15px]'>{album.name}</p>
          <p className='text-[15px] hidden sm:block'>3 days ago</p>
          <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
      ))}
    </>
  );
}

export default DisplayAlbum;
