import React, { useContext } from 'react'
import { ValContext } from './providerContext'
import { BsCart4 } from "react-icons/bs";
import { CiShop } from "react-icons/ci";

import './css/nav.css'

function Nav() {
  let {t}=useContext(ValContext)
  return (
    <div className="nav">
      <div className="logo">SimpleCart <CiShop style={{color:'green'}}/> </div>
      <div className="cart-total">
      <BsCart4/>
      <div className="num">{t}</div>
      </div>
    </div>
  )
}

export default Nav
