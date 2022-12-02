import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate  
  } from "react-router-dom";
import {countCartProducts,calculateTotalPrice} from '../../core/cartActions';
import { products } from '../../core/products';
import './navBar.css';

const ItemsLeft = [
   {
      icon: '/media/icons/phone-call.png',
      type: 'text',
      content: '+40 234 234 234'
   },
   {
      icon: '/media/icons/email.png',
      type: 'text',
      content: 'shop@gmail.com'
   },
]
const ItemsRight = [
  {
   icon: '/media/icons/facebook.png',
   to: 'www.google.com'
  },
  {
   icon: '/media/icons/instagram.png',
   to: 'www.google.com'
  }
]

const NavBarLinks = [
   {
      content: 'Shop',
      to: '/'
   },
   {
      content: 'Despre',
      to: '/despre'
   },
   {
      content: 'Checkout',
      to: '/checkout'
   },
   {
      content: 'Contact',
      to: '/checkout'
   }
]



const NavbarCore = ()=>{
   const [howMany, setHowMany] = useState({
      counter: 0,
      total: 0.00
   });

   useEffect(()=>{
      setInterval(()=>{
         setHowMany({
            counter: countCartProducts(),
            total: calculateTotalPrice()
         })
      },100)
   },[])

    return(
      <div className='navbar-container'>
         
         <div className='navbar-container-info-bar'>
            <div className='navbar-container-info-bar-padding'>
               <div className='navbar-container-info-bar-left'>
                  {
                     ItemsLeft.map((el)=>{
                        return <InfoBarItem {...el}/>
                     })
                  }
               </div>
               <div className='navbar-container-info-bar-center'>
                  <span><b>Program: </b>Luni - Vineri 08:00 - 22:00</span>
               </div>
               <div className='navbar-container-info-bar-right'>
                  {
                     ItemsRight.map((el)=>{
                        return <Link to={el.to}>
                           <img src={el.icon}/>
                        </Link>
                     })
                  }
               </div>
            </div>
            
         </div>

         <div className='navbar-container-info-bar-demo'>
            <div className='navbar-container-info-bar-demo-padding'>
               <div className='navbar-container-info-bar-demo-logo'>
                  <img src='/media/logo.png'/>
               </div>
               <div className='navbar-container-info-bar-demo-logo-text'>
                  <span><i>La noi gasiti toate tipurile de ambalaje biodegradabile, de la farfurii, caserole si pahare.</i></span>
               </div>

            </div>
         </div>

         <div className='navbar-container-info-navpanel'>
            <div className='navbar-container-info-navpanel-padding'>
               
               <div className='navbar-container-info-navpanel-links'>
                  {
                     NavBarLinks.map((el)=>{
                        return(
                        <div className='navbar-container-info-navpanel-links-item'>
                           <Link to={el.to}>{el.content}</Link>
                        </div>)
                     })
                  }
               </div>
               <div className='navbar-container-info-navpanel-banner'>
                  <img src='/media/icons/discount.png'/>
                  <span>Reduceri de sezon</span>
               </div>
               <div className='navbar-container-info-navpanel-cart'>
                  <div className='navbar-container-info-navpanel-cart-container'>
                     <img src="/media/icons/cart.png"/>
                     <div className='navbar-container-info-navpanel-cart-container-abs'>
                        <spann>{howMany.counter}</spann>
                     </div>
                  </div>
                  <span>{howMany.total} Lei</span>
               </div>

            </div>

            {/* <div className='navbar-container-info-navpanel-logo'>
               <img src='/media/logo.png'/>
            </div> */}
         </div>

      </div>
    )
}

const InfoBarItem = (el)=>{
   return(
      <>
         <div className='navbar-container-info-bar-item'>
            <img src={el.icon}/>
            <span>{el.content}</span>
         </div>
      </>
      
   )
}

export default NavbarCore;
