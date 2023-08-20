import React from 'react'
import {FaGithub ,FaLinkedin }from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill } from 'react-icons/bs'
import  Resume from '../assets/Resume.pdf'
const SocialLinks = () => {
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className=' bg-gradient-to-r from-gray-800 to-gray-300 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-gray-500 rounded-r-sm'>
                <a 
                href="https://www.linkedin.com/in/harsh-singh-b1abba249"
                className='flex justify-between items-center w-full text-white'>
                <>
                Linkedin<FaLinkedin size={30}/>
                </>
                </a>
            </li>
            <li className='bg-gradient-to-r from-gray-800 to-gray-300 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-gray-500'>
                <a 
                href="https://github.com/Harsh-ngh"
                className='flex justify-between items-center w-full text-white'>
                <>
                Github<FaGithub size={30}/>
                </>
                </a>
            </li>
            <li className=' bg-gradient-to-r from-gray-800 to-gray-300 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-gray-500'>
                <a 
                href="mailto:sengarharshsinghrajput@gmail.com"
                className='flex justify-between items-center w-full text-white'>
                <>
                Reach Me <HiOutlineMail size={30}/> 
                </>
                </a>
            </li>
            <li className=' bg-gradient-to-r from-gray-800 to-gray-300 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-gray-500 rounded-b-sm'>
                <a 
                href={Resume}
                className='flex justify-between items-center w-full text-white download'
                >
                <>
                Resume<BsFillPersonLinesFill size={30}/> 
                </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks