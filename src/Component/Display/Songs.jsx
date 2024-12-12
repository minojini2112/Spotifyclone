import React, { useContext } from 'react'
import { PlayerContext } from '../../Context/PlayerContext'

const Songs = ({name,image,desc,id}) => {

  const {Playid} = useContext(PlayerContext)
  return (
    <div onClick={()=>Playid(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
       <img className='rounded' src={image} alt=''/>
       <p className='mt-2 mb-1 font-bold'>{name}</p>
       <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default Songs