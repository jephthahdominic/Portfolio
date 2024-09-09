import React from 'react'
import { FaCss3, FaGit, FaHtml5, FaJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa6'
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io'
import { RiSeoFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTailwindcss } from 'react-icons/si'

const SkillList = () => {
  return (
    <ul className='max-w-full bg-eerie-black py-4 px-8 flex items-center xl-gap-8 gap-4 shadow-lg rounded-md'>
      <li>
        <FaHtml5 className="icon"/>
      </li>
      <li>
        <FaCss3 className="icon" />
      </li>
      <li>
        <FaJs className="icon"/>
      </li>
      <li>
        <RiTailwindCssFill className="icon" />
      </li>
      <li>
        <FaReact className="icon" />
      </li>
      <li>
        <FaGit className="icon" />
      </li>
      <li>
        <RiSeoFill className="icon" />
      </li>
    </ul>
  )
}

export default SkillList