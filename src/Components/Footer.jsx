import React from 'react'
import { FaFacebookF, FaInstagram, FaGit } from 'react-icons/fa';
import { FaG } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className=''>
        <div className='w-[100vw] h-auto bg-yellow-300 text-black p-2 flex justify-evenly items-center'>
          <p className='text-gray-500 '>&copy; 2024 Swiggy.com. All rights reserved.</p>
          <p className='text-gray-500 font-bold'>Designed and Developed by Abhishek kumar/swiggyGroup</p> 
          <div className='flex gap-2 text-blue-600'>
            <a href="#" className='text-blue-400 '>Private Policy</a>
            <a href="#" className='text-blue-400 '>Term & Condition</a>
            <a href="#" className='text-blue-400 '>Contact</a>

          <div className='flex gap-2 flex-wrap'>
            <a href="" className='flex'>
            <FaFacebookF className='self-center'/>
            </a>
            <a href="" className='flex'>
              <FaInstagram className='self-center'/>
            </a>
            <a href="https://github.com/Abhi00705" className='flex'>
              <FaGit className='self-center'/>
            </a>
          </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer