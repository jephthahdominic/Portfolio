import React from 'react'
import SkillList from '../components/SkillList'
import ProjectList from '../components/ProjectList'

const Portfolio = () => {
  
  return (
    <section className='w-full bg-antiFlash  max-xl:py-20 max-xl:pb-20 xl:padding border-t-paper sm:border-t-[22px] border-opacity-100' id='portfolio'>
      <h1 className='font-openSans text-3xl text-black text-center'>LATEST <span className='border-b-2 border-b-blue-300'>PROJECTS</span></h1>
      <ProjectList />
    </section>
  )
}

export default Portfolio