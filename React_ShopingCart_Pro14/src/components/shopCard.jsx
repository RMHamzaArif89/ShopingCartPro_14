import React, { useContext } from 'react'
import { ValContext } from './providerContext'

function  CartCard ({price, h1,img }) {
    // let {contextData}=useContext(ValContext)
    let {setCartData,cartData}=useContext(ValContext)
    // console.log(shopVal)

    const addCart=()=>{
      
        // if(updateData){
        //     return setCartData((pre)=>([...pre,cartData.quantity+1]))
        // }else{
            setCartData((pre)=>([...pre,{price:price,h1:h1,img:img,quantity:1}]))
        // }
        
    }

    // {()=>{setCartData((pre)=>([...pre,{price:price,h1:h1,img:img}]))}}
    return (
        <>
            <div className="cart-card">
                <img src={img} alt="" className="cart-img" />
                <div className="cart-h1">{h1}</div>
                <div className="cart-price">Price:{price}$</div>
                <div className="cartCard-btn"
                onClick={addCart} >Add to Cart</div>
                <div className="text">click</div>

            </div>
        </>
    )
}

export default CartCard 
