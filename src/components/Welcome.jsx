import React, { useEffect, useState } from 'react'
import { AIME } from '../assets/images'

const Welcome = ({appear, setAppear}) => {
  return (
    <div className={`overflow-hidden w-[50%] h-max bg-white rounded-md shadow-xl shadow-[rgba(0,0,0,0.4)] flex flex-col items-center p-5 ${appear ? 'animate-appear' :'animate-disappear'}`}>
        <div className='w-full flex items-center gap-5 justify-end px-5'>
            <span>Welcome to my public space</span>
            <button className='text-3xl' onClick={()=>setAppear((s)=>!s)}>&times;</button></div>
        <img src={AIME} alt="AIME" width={400} className='object-contain'/>
    </div>
  )
}

export default Welcome