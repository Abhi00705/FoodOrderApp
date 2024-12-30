import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useSelector, useDispatch } from 'react-redux';
import { addState, removeState } from '../feature/cart/cart';

const Body = () => {
    const[search, setSearch] = useState("");
    const[list, setList] = useState([]);
    const[filterList, setFilterList] = useState([]);
    const card = useSelector(state => state.cardState);
    const dispatch = useDispatch();

    const img = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"
    const api = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.907524&lng=75.739639&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  
     async function fetchData(){
          const response = await fetch(api);
          const json = await response.json();
          console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilterList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setList (json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        useEffect(() => {
          fetchData();
        },[])
        console.log(list);
    
        const handleClick = () => {    {/* handleClick */}
          const result = filterList.filter((item) => {
            return item?.info?.name.toLowerCase().includes(search.toLowerCase());
          })
          setFilterList(result);
        }

        function clickHandler(item){ {/*adding item to redux store */}
            dispatch(addState(item))
        }
    if(!list){
      return <Shimmer/>
    }
    else if(!filterList){
      return (<h1>resturnat not found</h1>);
    }

    return (
    <>
        <div> {/* Body */}
       
       <div> {/* search */}
         
         <input type="text" placeholder='Search...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
         <button onClick={handleClick}>Search</button>

       </div>

         {/* main body */}
         <div className='flex justify-center justify-self-center '>

             {/* card */}
             <div className='flex flex-wrap w-[100%] h-[100%] '>
               { filterList.map((item) => (
                   <div className="border-2 border-gray-200 p-4 m-4 w-[20rem] h-[20rem] gap-2" key={item?.info?.id}>
                   
                   <img src={img + item?.info?.cloudinaryImageId} alt="img" className='w-[95%] h-[60%]'/>
                   <p>{item?.info?.name}</p>
                   <p>{item?.info?.cuisines.join(", ")}</p>
                   <p>{item?.info?.costForTwo}</p>
                   <p>{item?.info?.locality}</p>
                    <button onClick={() => {clickHandler(item)}}>+</button>
                   </div>
                 ))
               }
             </div>
         </div>
     

     </div>
    </>
  )
}

export default Body