import React, { useEffect, useState } from 'react'
import { AIME } from '../assets/images'

const Welcome = ({appear, setAppear}) => {
    const [msg, setMsg] = useState("Welcome to my public space");
    setTimeout(() => {
        setMsg("I hope you have a great time exploring my space");
    }, 3000);
    setTimeout(()=>{
      setAppear((s)=>!s)
    },4500)
  return (
    <div className={`overflow-hidden relative h-max py-4 bg-white rounded-md shadow-2xl shadow-[rgba(0,0,0,0.4)] flex flex-col items-center p-5 ${appear ? 'animate-appear' :'animate-disappear'}`}>
        <span className='text-xl'>{msg}</span>
    </div>
  )
}

export default Welcome