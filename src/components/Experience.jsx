import React from 'react'
import logo_html from '../assets/logo_html.png'
import logo_css from '../assets/logo_css.png'
import logo_js from '../assets/logo_js.jpg'
import logo_tailwind from '../assets/logo_tailwind.png'
import logo_react from '../assets/logo_react.png'
import logo_firebase from '../assets/logo_firebase.png'
import logo_github from '../assets/logo_github.png'
import logo_git from '../assets/logo_git.png'
import logo_figma from '../assets/logo_figma.png'
const Experience = () => {
  const techs=[
    {
id:1,
src:logo_html,
title:"HTML",
style:'shadow-orange-500'
    },
    {
      id:2,
      src:logo_css,
      title: "CSS" ,
      style:'shadow-blue-500'
          },  
          {
            id:3,
            src:logo_js,
            title:"Javascript",
            style:'shadow-yellow-500'
                },
                {
                  id:4,
                  src:logo_tailwind,
                  title:"Tailwind",
                  style:'shadow-blue-200'
                      },
                      {
                        id:5,
                        src:logo_react,
                        title:"React.js",
                        style:'shadow-blue-500'
                            },
                      {
                        id:6,
                        src:logo_firebase,
                        title:"Firebase",
                        style:'shadow-yellow-300'
                            },
                            {
                              id:7,
                              src:logo_git,
                              title:"Git",
                              style:'shadow-orange-500'
                                  },
                                  {
                                    id:8,
                                    src:logo_github,
                                    title:"Github",
                                    style:'shadow-gray-800'
                                        },
                                        {
                                          id:9,
                                          src:logo_figma,
                                          title:"Figma",
                                          style:'shadow-gray-500'
                                              },
          
  ]
  return (
  
    <div name='experience'
    className='bg-gradient-to-b from-gray-800 to-black w-full h-full text-white '>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
       <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>Here are the technologies I'm familiar with</p>
            </div>
        <div className='w-full grid grid-cols grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0'>

          {
            techs.map(({id ,src ,title ,style})=>(
              <div key={id}
               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg${style}`}>
              <img src={src} alt="" className='w-20 mx-auto'/>
                  <p className='mt-4'>{title}</p>
          </div>
            ))       
          }
        </div>
       </div>
    </div>
  )
}

export default Experience