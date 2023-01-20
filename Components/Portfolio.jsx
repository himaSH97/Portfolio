import React from 'react'
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import Image from 'next/image';
import Card from '@/Components/Card';




const Portfolio = () => {
  return (
      <section className="py-10 ">
          <div>
            <h3 className="text-3xl text-center font-semibold py-1  dark:text-gr4 ">My Projects</h3>
            
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300 text-center">
              These are some of projects that i have worked on in undergraduate level.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <Card/>
            
          </div>
        </section>
   
  )
}

export default Portfolio
