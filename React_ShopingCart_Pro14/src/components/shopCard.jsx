import React, { useContext } from 'react'
import { ValContext } from './providerContext'

function  CartCard ({price, h1,img }) {
    let {Changename}=useContext(ValContext)
    let {total}=useContext(ValContext)
    // console.log(shopVal)
    
    return (
        <>
            <div className="cart-card">
                <img src={img} alt="" className="cart-img" />
                <div className="cart-h1">{h1}</div>
                <div className="cart-price">Price:{price}$</div>
                <div className="cartCard-btn"onClick={()=>{total()}}>Add to Cart</div>
                <div className="text" onClick={()=>{Changename()}}>click</div>

            </div>
        </>
    )
}

export default CartCard 
