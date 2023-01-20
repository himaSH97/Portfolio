import React from 'react'
import { CERTIFICATIONS } from '../Components/data2.jsx';

const Certifications = () => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-semibold dark:text-gray-400'>Online Certifications</h2>
            <div className='md:flex p-10 gap-8 justify-between text-left '>

                {CERTIFICATIONS.map(certification => (
                    <div class="flex h-auto p-2 " key={certification.name}>
                        <div class="bg-red-700 w-1"></div>
                        <div class="pl-[20px] dark:text-gr4">
                            <h3 className=' font-semibold'>{certification.name}</h3>
                            <h2>{certification.year}</h2>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    )
}

export default Certifications
