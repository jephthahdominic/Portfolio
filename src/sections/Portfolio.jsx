import React, { useState } from 'react'
import SkillList from '../components/SkillList'
import ProjectList from '../components/ProjectList'

const Portfolio = () => {
  
  return (
    <section className='w-full relative bg-eerie-black xl:padding padding-y' id='portfolio'>
      <div className='w-full absolute top-[-35px] flex justify-center'>
        <SkillList />
      </div>
      <h1 className='font-openSans text-3xl text-white-500 text-center'>LATEST <span className='border-b-2 border-b-blue-300'>PROJECTS</span></h1>
      <ProjectList />
    </section>
  )
}

export default Portfolio