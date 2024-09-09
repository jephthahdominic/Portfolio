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
      <div className=' bg-black bg-opacity-70'>
        <div className="w-full p-4">
          <Header />
        </div>
        <div className='xl:padding-l px-8 pt-10 xl:pb-4 pb-14  flex gap-8 items-center xl:flex-row-reverse flex-col'>
          <img src={myPic} alt="my picture" className='max-w-screen rounded-full w-[400px] h-[350px] max-sm:w-[400px] object-contain'/>
          <div className=''>
            <h1 className='text-white-500 text-2xl font-openSans'>Hi, I'm St-dominic Jephthah</h1>
            <h3 className='text-white-400 sm:text-5xl font-openSans text-4xl'>Frontend web developer</h3>
            <p className='text-white-500 leading-loose my-2'>I am thrilled to have you in my portfolio showcasing my creative journey and technical expertise as an enthusiastic Frontend developer. This collection of projects highlights my passion for software development.
            Within these pages, you'll find a curated selection of my current projects. Each project tells a story of innovation, problem-solving, and dedication to delivering high-quality results.
            Thank you for taking the time to review my portfolio. I look forward to the opportunity to discuss my work and how I can contribute to your team or project.
            </p>

            <div className='flex items-center gap-5 mt-4'>
              <URL border='border-white-400 border' url='#contactMe'>
                CONTACT ME
              </URL>
              <div className='flex items-center gap-3'>
                <a href="https://github.com/jephthahdominic" target='_blank'>
                  <IoLogoGithub className='text-white text-3xl'/>
                </a>
                <a href="https://x.com/JephthahDomini2" target='_blank'>
                  <IoLogoTwitter className='text-white text-3xl'/>
                </a>
                <a href="https://www.linkedin.com/in/jephthah-dominic-6267591a4" target='_blank'>
                  <FaLinkedinIn className='text-white text-3xl'/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div  className=' w-full absolute -bottom-10 z-50 flex justify-center'>
          <SkillList />
        </div>
      </div>
    </section>
  )
}

export default Hero