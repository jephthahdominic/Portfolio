import React from 'react'
import Button from './Button'
import { IoSend } from 'react-icons/io5'

const Form = () => {
  return (
    <form action="" className='w-[70%] shadow-lg mt-5 p-10 border-2 border-theme-color border-opacity-60 rounded-md
    flex flex-col gap-3'>
        <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-white-500 text-xl font-openSans'>Name</label>
            <input type="text" className='p-2 bg-chineseBlack rounded-md focus:border-none focus:bg-white outline-none'/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-white-500 text-xl font-openSans'>Email</label>
            <input type="text" className='p-2 bg-chineseBlack rounded-md focus:border-none focus:bg-white outline-none'/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="message" className='text-white-500 text-xl font-openSans'>Message</label>
            <textarea name="" id="" className='p-2 bg-chineseBlack h-[100px] rounded-md focus:border-none focus:bg-white outline-none'></textarea>
        </div>
        <div className='w-full flex justify-end mt-2'>
          <Button background='bg-blue-300' color='text-chineseBlack'>
            Let's Work <IoSend className='text-chineseBlack text-xl -rotate-45'/>
          </Button>
        </div>
    </form>
  )
}

export default Form