import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [logToggle, setLogToggle] = useState("login"); 
    const [isLogin, setIsLogin] = useState(true);
    const url ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/SwiggyLogoOrange.png";
    function handleLogClick(){
      setIsLogin((pre)=>!pre);
      if(isLogin){
        setLogToggle("Login");
      }
      else{
        setLogToggle("Logout");
      }
    }
  return (
    <>
         <div className="w-[100vw] h-[5rem] flex justify-around items-center p-4 bg-yellow-200">
        <img src={url} placeholder="img"/> {/* Logo */}
        <div className='mr-10'> {/*Navigation bar */}
          <ul className="flex space-x-4 text-gray-600">
            <li className='font-bold'><Link to={"/"}>Home</Link></li>
            <li className='font-bold'><Link to={"/about"}>About</Link></li>
            <li className='font-bold'><Link to={"/contact"}>Contact</Link></li>
            <li className='font-bold'><Link to={"/cart"}>Cart</Link></li>
            <li className='font-bold'><Link to={"/help"}>Help</Link></li>
          </ul>
        </div>

        <div className='w-[6rem] h-[3rem] bg-orange-700 text-white'>{/*Login and Logout */}
           <button onClick={handleLogClick} className='h-[100%] w-[100%]'>{logToggle}</button>
          
        </div>
      </div>

    </>
  )
}

export default Header