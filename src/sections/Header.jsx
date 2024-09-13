import React from 'react'
import { FaHome } from 'react-icons/fa'

const Header = () => {
  return (
   <nav className='w-full flex justify-center max-xl:justify-end text-left max-xl max-xl:flex-col max-xl:absolute right-0 max-xl:items-end items-center gap-4 relative max-xl:pr-2'>
      <a href="#" className='p-3 hover:border-b-blue-400 hover:border-b-2 active:border-b-blue active:border-b-2 transition'><FaHome className='text-blue-400 text-2xl'/></a>
      <a href="#Resume" className='p-3 hover:border-b-blue-400 hover:border-b-2 active:border-b-blue active:border-b-2 text-black text-xl transition'>Resume</a>
      <a href="#portfolio" className='p-3 hover:border-b-blue-400 hover:border-b-2 active:border-b-blue active:border-b-2 text-black text-xl transition'>Portfolio</a>
      <a href="#contactMe" className='p-3 hover:border-b-blue-400 hover:border-b-2 active:border-b-blue active:border-b-2 text-black text-xl transition'>Contact me</a>
   </nav>
  )
}

export default Header