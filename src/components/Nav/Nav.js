import {ArrowBackIos, ArrowDropDown, ArrowDropUp, ArrowForwardIos} from '@mui/icons-material'
import { useState } from 'react';
import './nav.css'

export const Nav = () => {
   const [isDropped, setIsDropped] = useState(false)

   const handleClick = () => {
      setIsDropped(!isDropped)
   }

   return (
      <div className='navContainer'>
         <div className='navLeft'>
            <div className='navArrow'>
               <ArrowBackIos sx={{
               position: 'absolute',
               top: 5,
               left: 9,
               color: '#ffffff80',
               fontSize: '20px',
               }} />
            </div>
            <div className='navArrow'>
               <ArrowForwardIos sx={{
               position: 'absolute',
               top: 5,
               left: 6,
               color: '#ffffff80',
               fontSize: '20px',
               }} />               
            </div>
         </div>
         <div className='navRight'>
            <div className='navMenu' onClick={handleClick}>
               <div className='navMenuProfile'>
                  <img className='navMenuImg' src='./images/A-Wall.png' alt=''></img>
                  <p>Axel</p>
                  {isDropped ? <ArrowDropUp /> : <ArrowDropDown />}
               </div>
               {isDropped && 
                  <div className='navMenuItems'>
                     <p>Profile</p>
                     <p>Settings</p>
                     <hr/>
                     <p>Logout</p>
                  </div>
               }
            </div>
         </div>
      </div>
   )  
};
