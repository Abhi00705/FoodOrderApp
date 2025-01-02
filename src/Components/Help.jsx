import React, { useState } from 'react'
import faqData from '../util/faq'


const Help = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const  clickHandler = (index)=>{
    setActiveIndex((preVal) =>{
      if(preVal === index){
        return null;
      }
      else{
        return index;
      }
    });
  }


  return (
    <div className='flex flex-col gap-3'>
        <h1>FQA Accordian</h1>
        <div className='flex flex-col gap-2'>
          {
            faqData.map((item, index) =>(
              <div className='shadow-md  ' key={index}>
                <span className='flex gap-4 bg-gray-400 cursor-pointer' onClick={()=>clickHandler(index)}>
                    <h1 className='inline'>{item.question}</h1>
                    
                </span>
                {
                  activeIndex === index && <h2 className='bg-gray-300'>{item.answer}</h2>
                }
                
              </div>
            ))
          }
        </div>
        
    </div>
  )
}

export default Help