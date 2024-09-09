import React from 'react'
import Form from '../components/Form'
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <section className='w-full bg-theme-color' id='contactMe'>
      <div className='w-full h-full flex flex-col items-center xl:padding padding-y px-4 bg-black bg-opacity-40'>
        <h1 className='font-openSans text-3xl text-white-500 text-center'>HAVE AN <span className='border-b-blue-300 border-b-2'>IDEA?</span> 😏</h1>
        <Form />
        <div className='flex items-center gap-5 mt-10'>
          <a href="https://github.com/jephthahdominic" target='_blank'>
            <IoLogoGithub className='text-white-500 text-3xl'/>
          </a>
          <a href="https://x.com/JephthahDomini2" target='_blank'>
            <IoLogoTwitter className='text-white-500 text-3xl'/>
          </a>
          <a href="https://www.linkedin.com/in/jephthah-dominic-6267591a4" target='_blank'>
            <FaLinkedinIn className='text-white-500 text-3xl'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactMe