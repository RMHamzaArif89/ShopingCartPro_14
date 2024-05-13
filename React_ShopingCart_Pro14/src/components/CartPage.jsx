import React, { useContext } from 'react'
import './css/cartPage.css'
import Nav from './nav'
import { ValContext } from './providerContext'

function CartPage() {
  let{cartData}=useContext(ValContext)

  return (
    
  <>
  
  <div className='cartPage'>
   {cartData==0?
   <div className='cart-row'>Your Cart is empty</div>
   :cartData.map((item)=>{
    return(
      <div className="cart-row">
      <img src={item.img} alt="" className="cart-img" />
      <div className="cart-h1">{item.h1}</div>
      <div className="cart-price">{item.price}</div>
  </div>
    )
    })
   }
      
    </div>
  </>
  )
}

export default CartPage
