import React, { useContext } from 'react'
import { ValContext } from './providerContext'
import { BsCart4 } from "react-icons/bs";
import { CiShop } from "react-icons/ci";

import './css/nav.css'

function Nav() {
  let {setShowCart,totalItems}=useContext(ValContext)
  return (
    <div className="nav">
      <div className="logo" onClick={()=>{setShowCart(false )}}>SimpleCart <CiShop style={{color:'green'}}/> </div>
      <div className="cart-total" onClick={()=>{setShowCart(true)}}>
      <BsCart4/>
      <div className="num">{totalItems}</div>
      </div>
    </div>
  )
}

export default Nav
