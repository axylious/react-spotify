import {ArrowBackIos, ArrowDropDown, ArrowDropUp, ArrowForwardIos} from '@mui/icons-material'
import { useState } from 'react';
import { handleLogin, handleLogout } from '../../pages/Login/Login';
import './nav.css'

export default function Nav({token}) {
   const [isDropped, setIsDropped] = useState(false)

   const handleClick = () => {
      setIsDropped(!isDropped)
   }

   const UserNav = () => {
      return (
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
                  <p onClick={handleLogout}>Logout</p>
               </div>
            }
         </div>
      )
   }

   const LoginNav = () => {
      return (
         <div className='navMenu' onClick={handleLogin}>
            <div className='navMenuProfile'>
               <p id='logIn'>Log In</p>
            </div>
         </div>
      )
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
            {token ? <UserNav /> : <LoginNav />}
         </div>
      </div>
   )
}