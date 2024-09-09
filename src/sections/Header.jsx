import React from 'react'
import { FaHome } from 'react-icons/fa'

const Header = () => {
  return (
   <nav className='w-full flex justify-center items-center gap-4 relative'>
      <a href="#" className='p-3 hover:border-b-blue-400 hover:border-b-2 active:border-b-blue active:border-b-2 transition'><FaHome className='text-white-400  text-2xl'/></a>
      <a href="#Resume" className='p-3 hover:border-b-blue-400 hover:border-b-2 active:border-b-blue active:border-b-2 text-white-400 text-xl transition'>Resume</a>
      <a href="#portfolio" className='p-3 hover:border-b-blue-400 hover:border-b-2 active:border-b-blue active:border-b-2 text-white-400 text-xl transition'>Portfolio</a>
      <a href="#contactMe" className='p-3 hover:border-b-blue-400 hover:border-b-2 active:border-b-blue active:border-b-2 text-white-400 text-xl transition'>Contact me</a>
   </nav>
  )
}

export default Header