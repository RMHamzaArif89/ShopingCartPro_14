import React, { useContext } from 'react'
import { ValContext } from './providerContext'

function  CartCard ({price, h1,img }) {
    // let value=React.useContext(ValContext)
    // console.log(shopVal)
    
    return (
        <>
            <div className="cart-card">
                <img src={img} alt="" className="cart-img" />
                <div className="cart-h1">{h1}</div>
                <div className="cart-price">Price:{price}$</div>
                <div className="cartCard-btn">Add to Cart</div>
                <div className="text">{}</div>

            </div>
        </>
    )
}

export default CartCard 
