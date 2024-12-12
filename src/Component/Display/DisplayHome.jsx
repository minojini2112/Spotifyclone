import React from 'react'
import Navbar from './Navbar';
import {albumdata} from '../../assests/assests'
import {songsData} from '../../assests/assests'
import Album from './Album';
import Songs from './Songs';
const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
        <h1 className='my-5 text-2xl font-bold'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumdata.map((item,index)=>(<Album key={index}  desc={item.desc} id={item.id} image={item.image}/>))}
        </div> 
    </div>
    <div className='mb-4'>
        <h1 className='my-5 text-2xl font-bold'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item,index)=>(<Songs key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div> 
    </div>
    </>
  );
}

export default DisplayHome