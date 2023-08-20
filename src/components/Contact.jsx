import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen p-4 text-white bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx--auto h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Kindly take a moment to fill out the form below so that we can connect with each other. Your information is greatly appreciated and will allow me to get in touch more effectively. Thank you!
</p>
            </div>
            <div className='flex items-center justify-center '>
                <form action="https://getform.io/f/abeb2534-04a0-4c23-9b95-da609a6a6b59"  method="POST" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" 
                    name="name"
                    placeholder='Enter your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type="text"
                      name="email"
                      placeholder='Enter your email' 
                      className='p-2 mt-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name='message'
                     placeholder='Enter your message here'
                     rows={10}
                     className='p-2 mt-2 bg-transparent border-2 rounded-md text-whi focus:outline-none'/>

                    <button className='bg-gradient-to-b from-cyan-500 to-blue-500 text-white  px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact