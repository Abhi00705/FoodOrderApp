import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  removeState } from '../feature/cart/cart'
import { CiCircleMinus } from "react-icons/ci";

const Cart = () => {
  const img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"
  const card = useSelector(state => state.cartState);
  const dispatch = useDispatch();

  function clickHandler(id){ {/* removeing item from redux store*/}
    dispatch(removeState(id));
  }
  console.log(typeof card , card);
  if(card.length === 0 ){
    return (
    <div className=''>
      <h1 className='mx-auto my-auto align-middle font-sans font-bold text-blue-950 text-3xl p-4 '>Cart is empty</h1>;
    </div>
  )
  }
  return (
    <div className='flex'>
      {
        card.map((item) =>(
          <div className="border-2 border-gray-200 p-4 m-4 w-[20rem]  gap-2" key={item?.info?.id}>
          
          <img src={img + item?.cloudinaryImageId} alt="img" className='w-[95%] h-[60%]'/>
          <p className='font-sans font-extrabold'>{item?.name}</p>
          <p className='text-gray-500'>{item?.cuisines.join(", ")}</p>
          <p className='text-gray-700'>{item?.costForTwo}</p>
          <p className='text-gray-700'>{item?.locality}</p>
          <p className='text-gray-700'>item:{item?.count}</p>
          <button onClick={() => clickHandler(item?.id)} className='border-2 border-black rounded-lg bg-black text-white cursor-pointer shadow-lg shadow-gray-500'>
                <CiCircleMinus className='text-3xl'/>
              </button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart