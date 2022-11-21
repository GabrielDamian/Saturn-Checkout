import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate  
  } from "react-router-dom";

import { products } from '../../core/products';

const NavbarCore = ()=>{
    return(
        <>
         <p>
            <Link to="/">Home</Link>
         </p>
         <p>
            <Link to="/categories">categories</Link>
         </p>
         <p>
            <Link to="/product">product</Link>
         </p>
         <p>
            <Link to="/checkout">checkout</Link>
         </p>
        </>
    )
}

export default NavbarCore;
