import React from 'react'
import Image from 'next/image';
import pic from "../public/me4.png";
import YourSvg from "../public/img.svg"

const About = () => {
  return (
    <div>
      <div className='relative  '>
            <div className=' text-center lg:py-10' >
              <Image src={YourSvg} className='mx-auto scale-75 dark:fill-slate-50 lg:scale-100 ' alt=''  />
              <h2 className='text-4xl py-2 text-center text-blue-500 font-medium lg:text-5xl dark:text-slate-100'>Nipun Himash</h2>
              <h3 className='text-2xl py-2  text-center lg:text-3xl  dark:text-gray-400'>Designer and Developer</h3>
              <p className='text-md py-5  text-center mx-auto leading-6 text-blue-700 lg:text-lg max-w-5xl  dark:text-gr4'>
              I&apos;m an BSc Hons. Computer Science undergraduate at the University of 
                        Sri Jayewardenepura. I am a designer developer and a Machine learning and AI enthusiasts. My current research interests are machine learning explainability.</p>
            </div>

            <div className='relative rounded-full overflow-hidden w-60 h-60 mt-10 mx-auto lg:mt-10 md:mt-20 md:scale-150 lg:scale-150 hover:scale-105 transition transform '>
              <Image src={pic} className= 'mx-auto lg:scale-100 ' alt=''/>

            </div>
            
        </div>
    </div>
  )
}

export default About
