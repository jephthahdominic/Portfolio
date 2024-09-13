import React from 'react'
import Button from '../components/Button'
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import { myPic } from '../assets/images'
import Header from './Header'
import URL from '../components/URL'
import SkillList from '../components/SkillList'

const Hero = () => {
  return (
    <section className='bg-theme-color bg-opacity-70 w-full relative'>
      <div className=' bg-antiFlash pb-4'>
        <div className="w-full p-4">
          <Header />
        </div>
        <div className='xl:padding-l px-8 pt-10 xl:pt-28 xl:pb-28 pb-14  flex gap-14 items-center xl:flex-row-reverse flex-col'>
          <img src={myPic} alt="my picture" className='max-w-screen w-[400px] h-[350px] max-sm:w-[400px] object-contain'/>
          <div className=''>
            <h1 className='text-slate-gray text-2xl font-openSans'>Hi, I'm St-dominic Jephthah</h1>
            <h3 className='text-black sm:text-5xl font-openSans text-4xl'>Frontend developer</h3>
            <p className='text-slate-gray leading-normal text-xl my-2'>I am thrilled to have you in my portfolio showcasing my creative journey and technical expertise as an enthusiastic Frontend developer. This collection of projects highlights my passion for software development.
            Within these pages, you'll find a curated selection of my current projects. Each project tells a story of innovation, problem-solving, and dedication to delivering high-quality results.
            </p>

            <div className='flex items-center gap-5 mt-4'>
              <URL border='border-black border' url='#contactMe' color='text-black'>
                CONTACT ME
              </URL>
              <div className='flex items-center gap-3'>
                <a href="https://github.com/jephthahdominic" target='_blank'>
                  <IoLogoGithub className='text-black text-3xl'/>
                </a>
                <a href="https://x.com/JephthahDomini2" target='_blank'>
                  <IoLogoTwitter className='text-black text-3xl'/>
                </a>
                <a href="https://www.linkedin.com/in/jephthah-dominic-6267591a4" target='_blank'>
                  <FaLinkedinIn className='text-black text-3xl'/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div  className=' w-full sm:absolute -bottom-12 z-50 flex justify-center max-xl:px-4'>
          <SkillList />
        </div>
      </div>
    </section>
  )
}

export default Hero