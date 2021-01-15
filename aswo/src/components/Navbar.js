import React from "react"
import {Link} from "react-router-dom"
 import './header.css'

export const Navbar = () =>{

 

  return(
    <div>
      <Link to="/">Home </Link>
      <Link to="/individual-developer"> individual-developer</Link>
      <Link to="/shop">Shop Now </Link>
  </div> 
  )
}