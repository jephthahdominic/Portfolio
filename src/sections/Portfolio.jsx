import React from 'react'
import SkillList from '../components/SkillList'
import ProjectList from '../components/ProjectList'

const Portfolio = () => {
  
  return (
    <section className='w-full bg-eerie-black py-28 xl:padding' id='portfolio'>
      <h1 className='font-openSans text-3xl text-white-500 text-center'>LATEST <span className='border-b-2 border-b-blue-300'>PROJECTS</span></h1>
      <ProjectList />
    </section>
  )
}

export default Portfolio