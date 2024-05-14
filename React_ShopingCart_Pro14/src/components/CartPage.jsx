import React, { useContext } from 'react'
import './css/cartPage.css'
import Nav from './nav'
import { ValContext } from './providerContext'

function CartPage() {
  let { cartData, addToCart, removeFromCart, totalPrice } = useContext(ValContext)

  return (

    <>

      <div className='cartPage'>
        {cartData == 0 ?
          <div className='cart-row'>Your Cart is empty</div>
          : cartData.map((item) => {
            return (
         <>
              <div className="cart-row">
                <img src={item.img} alt="" className="cart-img" />
                <div className="cart-h1">{item.h1}</div>
                <div className="cart-price">{item.price}$</div>
                <div className="quantity">
                  <div className="quantity-btn" onClick={() => { removeFromCart(item.id) }}>-</div>
                  <div className="quantity-num">{item.quantity}</div>
                  <div className="quantity-btn" onClick={() => { addToCart(item.id) }}>+</div>

                </div>
              </div>
             
         </>
            )

          })
      
        }
        <>
        <div className="cartTotal">
            <div className="cart-total-h1">Price Total:</div>
            <div className="cart-total-price">{totalPrice()}$</div>
          </div>
        </>

      </div>
    </>
  )
}

export default CartPage
