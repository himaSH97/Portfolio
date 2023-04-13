import React from 'react'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className=' bg-slate-600 md:flex justify-between rounded-t-3xl' >
      <div className='  p-10 '>
        <h4 className='font-bold pb-2 text-slate-300 text-lg'> Contact me</h4>
        <ul>
          <li>
            <h5 className='font-semibold text-slate-400'>Mobile:</h5>
            <div class="flex h-auto p-2 " >
              <div class="bg-yellow-700 w-1"></div>
              <div class="pl-[20px] dark:text-gr4">
                <p className=' text-green-400'>+94347684943</p>
              </div>
            </div>


          </li>
          <li>
            <h5 className='font-semibold text-slate-400'>E-mail:</h5>

            <div class="flex h-auto p-2 " >
              <div class="bg-yellow-700 w-1"></div>
              <div class="pl-[20px] dark:text-gr4">
                <p className=' text-green-400'>nipun.himash.97@gmail.com</p>
              </div>
            </div>


          </li>
        </ul>
      </div>
      <div className=' p-10  '>
        <h4 className='font-bold pb-2 text-slate-300 text-lg'> Follow me</h4>
        <div className="text-3xl text-gray-200 dark:text-gray-400 flex gap-3">
          <AiFillTwitterCircle className=' hover:text-black ' />
          <AiFillLinkedin className=' hover:text-black' />
          <AiFillYoutube className=' hover:text-black' />
          <AiFillFacebook className=' hover:text-black' />

        </div>

      </div>


      <div className=' p-10'>
        <h4 className='font-bold pb-2 text-slate-300 text-lg'> Tags</h4>
        <ul className='grid grid-cols-2 gap-1 text-green-300'>
          <li>#Html</li>
          <li>#Java</li>
          <li>#Css</li>
          <li>#Python</li>
          <li>#R</li>
          <li>#C</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
