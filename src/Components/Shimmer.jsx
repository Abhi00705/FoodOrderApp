import React from 'react'

const Shimmer = () => {
    
  return (
    
        <div className=" flex flex-wrap gap-4 justify-center p-5">
            
                {Array(12)
                .fill("")
                .map((e,index)=>(<div key={index} className="
                    p-4
                    w-56
                    h-72
                   
                    animate-shimmer
                    @apply animate-shimmer
                    bg-gradient-to-r from-gray-300 to-gray-200"></div>))}
        </div>
    
  )
}

export default Shimmer