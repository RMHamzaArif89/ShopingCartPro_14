import React, { useContext } from 'react'
import { ValContext } from './providerContext'
import { rtrim } from 'validator'

function  CartCard ({price, h1,img ,id}) {
   
    let {setCartData,cartData}=useContext(ValContext)
   

    // const addCart=()=>{

    //  setCartData((pre)=>([...pre,{id:id,price:price,h1:h1,img:img}]))

    // }
    const addCart = () => {
        const isItemInCart = cartData.find((cartItem) => cartItem.id === id); // check if the item is already in the cart
      
        if (isItemInCart) {
        setCartData(
            cartData.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
            cartItem.id === id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem // otherwise, return the cart item
            )
        );
        } else {
        setCartData([...cartData, { id:id, h1:h1, price:price, img:img, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
        }
      };

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
