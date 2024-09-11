import React, { useEffect, useState } from 'react'
import { AIME } from '../assets/images'

const Welcome = ({appear, setAppear}) => {
    const [msg, setMsg] = useState("Welcome to my public space");
    setTimeout(() => {
        setMsg("I hope you have a great time exploring my space");
    }, 1500);
  return (
    <div className={`overflow-hidden w-[50%] max-sm:w-[80%] h-max max-xl:h-[50%] bg-white rounded-md shadow-xl shadow-[rgba(0,0,0,0.4)] flex flex-col items-center p-5 ${appear ? 'animate-appear' :'animate-disappear'}`}>
        <div className='w-full flex items-center gap-5 justify-end px-5'>
            <span className='text-xl'>{msg}</span>
            <button className='text-3xl' onClick={()=>setAppear((s)=>!s)}>&times;</button></div>
        <img src={AIME} alt="AIME" width={400} className='object-contain'/>
    </div>
  )
}

export default Welcome