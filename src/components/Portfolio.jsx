import React from 'react'
import ieee from '../assets/ieee.png'
import Port from '../assets/Port.png'


const Portfolio = () => {
  return (
    <div
    name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 text-white  p-4 mx-auto flex flex-col justify-center w-full '>
    <div  className='mx-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <p className='text-4xl font-bold inline underline decoration-gray-500 decoration-4 border-gray-500'>Portfolio</p>
        <p className='py-6'>Check some of my work right here</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        <div className='shadow-md shadow-gray-600 rounded-lg'>
          <img
          src={ieee}
          alt=''
          className='rounded-md duration-200 hover:scale-105'
          />
          <div>
            <button className='w-1/ px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
            <button className='w-1/ px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            <p className=''>Team Project :IEEE Oficial Website</p>
          </div>
        </div>
     
        <div className='shadow-md shadow-gray-600 rounded-lg'>
          <img
          src={Port}
          alt=''
          className='rounded-md duration-200 hover:scale-105'
          />
          <div>
            <button className='w-1/ px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
            <button className='w-1/ px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            <p className=''>Solo Project:Personal Portfolio </p>
          </div>
        </div>
            
      </div>
    </div>
    </div>
  )
}

export default Portfolio