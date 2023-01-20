import React from 'react'
import { EDUCATIONS } from '../Components/data2.jsx';

const Education = () => {
  return (
    <div className='text-center'>
            <h2 className='text-3xl font-semibold dark:text-gray-400'>Education Background</h2>
            <div className='md:flex p-10 gap-8 justify-between text-left '>

                {EDUCATIONS.map(education => (
                    <div class="flex h-auto p-2" key ={education.name} >
                        <div class="bg-blue-700 w-1"></div>
                        <div class="pl-[20px] dark:text-gr4">
                            <h3 className=' font-semibold'>{education.name}</h3>
                            <h2>{education.year}</h2>
                            <h2>{education.Institute}</h2>
                        </div>
                    </div>
                ))}



            </div>
        </div>
  )
}

export default Education
