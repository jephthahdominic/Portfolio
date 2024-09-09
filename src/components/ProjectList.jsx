import React, { useState } from 'react'
import { projects } from '../constants'
import URL from './URL';
import { IoLink } from 'react-icons/io5';

const ProjectList = () => {
    const [display, setDisplay] = useState(null);
    projects.forEach((element, index) =>{
      if(index % 2 === 0){

      }
    })
    return (
    <div className='w-full padding h-screen'>
        <div className='w-full flex max-xl:flex-col justify-center gap-10 max-xl:gap-14 xl:mt-10'>
          {projects.map((project, index)=>(
            <div className={`relative cursor-pointer max-xl:flex items-center gap-4 ${index % 2 !== 0 ? 'flex-row-reverse': 'flex-row'}`} key={project.url} onMouseOver={()=>setDisplay(project.url)} onMouseOut={()=>setDisplay("")}> 
              <img src={project.img} alt="project snippet" className='xl:w-[700px] w-[250px] xl:h-[350px] h-[200px] brightness-60'/>
              <div className={`xl:absolute top-0 h-full xl:w-full xl:bg-black bg-opacity-50 flex flex-col justify-between ${display === project.url ? 'xl:opacity-100 xl:animate-fade-slow':'xl:opacity-0'}`}>
                <div className='w-full flex justify-end p-2'>
                  <IoLink className='text-white text-3xl max-xl:hidden'/>
                </div>
                <div className='xl:bg-black bg-opacity-80 p-2 flex max-xl:flex-col justify-between items-center max-xl:items-start'>
                  <div className='max-xl:flex flex-col gap-2'>
                    <h3 className='text-2xl text-white'>{project.title}</h3>
                    <p className='text-white-400 text-md'>{project.description}</p>
                    <p className='text-white-400 text-md'>Stack: {project.stack}</p>
                  </div>
                  <div className='max-xl:mt-2'>
                      <URL border='border-2 border-blue-300' classes='hover:bg-blue-300 hover:text-black' url={project.url}>
                        DEMO
                      </URL>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default ProjectList