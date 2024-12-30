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
  return (
    <div>
      {
        card.map((item) =>(
          <div className="border-2 border-gray-200 p-4 m-4 w-[20rem] h-[20rem] gap-2" key={item?.info?.id}>
          
          <img src={img + item?.info?.cloudinaryImageId} alt="img" className='w-[95%] h-[60%]'/>
          <p>{item?.info?.name}</p>
          <p>{item?.info?.cuisines.join(", ")}</p>
          <p>{item?.info?.costForTwo}</p>
          <p>{item?.info?.locality}</p>
          <button onClick={() => clickHandler(item.id)}> - </button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart