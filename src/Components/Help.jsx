import React, { useState } from 'react'
import faqData from '../util/faq'
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);


  return (
    <div className='flex flex-col gap-4 bg-gray-500'>
        <h1>FQA Accordian</h1>
        {
          faqData.map((item, index) => (
            <div className='bg-gray-500'>
              <div className='' onClick={() => handleClick(index)}>
                {
                  activeIndex === index ? <CiSquareMinus /> : <CiSquarePlus />

                }
              </div>
               <div className='bg-gray-100 p-1'>
              <h1 className= 'font-sans font-semibold text-2xl p-2'>{item.question}</h1>
              <p className='font-sans text-lg font-light pl-2'>{item.answer}</p>
            </div>

            </div>
          ))
        }
    </div>
  )
}

export default Help