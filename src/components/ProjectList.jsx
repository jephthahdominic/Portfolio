import React, { useState } from 'react'
import { projects } from '../constants'
import URL from './URL';
import { IoLink } from 'react-icons/io5';

const ProjectList = () => {
    const [display, setDisplay] = useState(null);
    return (
    <div className='w-full padding h-screen'>
        <div className='w-full flex justify-center max-sm:flex-col gap-10 mt-10 max-xl:mt-0'>
          {projects.map((project)=>(
            <div className='relative cursor-pointer' key={project.url} onMouseOver={()=>setDisplay(project.url)} onMouseOut={()=>setDisplay("")}> 
              <img src={project.img} alt="project snippet" className='xl:w-[700px] w-[300px] max-sm:w-full xl:h-[350px] h-[300px] brightness-60'/>
              <div className={`absolute top-0 h-full w-full bg-black bg-opacity-50 flex flex-col justify-between ${display === project.url ? 'opacity-100 animate-fade-slow':'opacity-0'}`}>
                <div className='w-full flex justify-end p-2'>
                  <IoLink className='text-white text-3xl'/>
                </div>
                <div className='bg-black bg-opacity-80 p-2 flex justify-between items-center'>
                  <div>
                    <h3 className='text-2xl text-white'>{project.title}</h3>
                    <p className='text-white-400 text-md'>{project.description}</p>
                    <p className='text-white-400 text-md'>Stack: {project.stack}</p>
                  </div>
                  <div>
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