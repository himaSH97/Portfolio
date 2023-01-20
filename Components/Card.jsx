import React from 'react'
import cardList from '../Components/data.jsx';
import Image from 'next/image';

const Card = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1'>
      
        {cardList.map(card=>(
            <div className=' shadow-lg rounded-lg hover:scale-105 transition duration-300 ease-in-out dark:bg-gray-600' key={card.title} >
                <img className=' rounded-t-lg' src={card.img} alt='' /> 
                <div className='p-5'>
                    <h3 className='text-xl font-bold'>{card.title}</h3>
                    <p>
                        {card.text}
                    </p>
                </div>
            </div>


        ))}

    </div>
  )
}

export default Card
