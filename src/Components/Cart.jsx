import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  removeState } from '../feature/cart/cart'

const Cart = () => {
  const img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"
  const card = useSelector(state => state.cartState);
  const dispatch = useDispatch();

  function clickHandler(id){ {/* removeing item from redux store*/}
    dispatch(removeState(id));
  }
  console.log(card)
  return (
    <div className='flex gap-10 flex-wrap justify-center overflow-x-hidden'>
      {
        card.map((item) =>
           (
          <div className="border-2  border-gray-200 p-4 m-4 w-[20rem] gap-2" key={item?.info?.id}>
          
          <img src={img + item?.cloudinaryImageId} alt="img" className='w-[95%] h-[60%] object-cover object-center'/>
          <p>{item?.name}</p>
          <p>{item?.cuisines.join(", ")}</p>
          <p>{item?.costForTwo}</p>
          <p>{item?.locality}</p>
          <p className='text-lg font-bold text-red-600'>{item?.count}</p>
          <button onClick={() => clickHandler(item.id)}> - </button>
          </div>
        ))
      }
      
    </div>
  )
}

export default Cart