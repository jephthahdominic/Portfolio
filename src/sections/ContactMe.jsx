import React from 'react'
import Form from '../components/Form'

const ContactMe = () => {
  return (
    <section className='w-full bg-theme-color' id='contactMe'>
      <div className='w-full h-full flex flex-col items-center xl:padding padding-y bg-black bg-opacity-40'>
        <h1 className='font-openSans text-3xl text-white-500 text-center'>CONTACT <span className='border-b-blue-300 border-b-2'>ME</span></h1>
        <Form />
      </div>
    </section>
  )
}

export default ContactMe