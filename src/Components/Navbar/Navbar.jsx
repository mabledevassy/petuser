import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

const[menu,setMenu]=useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src= {logo}alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li  onClick={()=>{setMenu("shop")}}><Link  to='/' style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"?<h/>:<></>}</li>
        <li  onClick={()=>{setMenu("dogs")}}><Link  to='/pets'style={{textDecoration:'none'}}>Dog</Link>{menu==="dogs"?<h/>:<></>}</li>
        <li  onClick={()=>{setMenu("cats")}}><Link   to='/cats'style={{textDecoration:'none'}}>Cat</Link>{menu==="cats"?<h/>:<></>}</li>
        <li  onClick={()=>{setMenu("fishes")}}><Link   to='/fishes'style={{textDecoration:'none'}}>Fish</Link>{menu==="fishes"?<h/>:<></>}</li>
        <li  onClick={()=>{setMenu("birds")}}><Link   to='/birds'style={{textDecoration:'none'}}>Birds</Link>{menu==="birds"?<h/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to='/login'><button>Login</button></Link> 
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
     <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
