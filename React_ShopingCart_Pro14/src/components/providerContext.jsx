import React from "react";
import { useState, createContext, useContext } from "react";


export const ValContext=createContext(null)


function ProviderContext({children}) {
  let [cartData,setCartData]=useState([])
  
  let[showCart,setShowCart]=useState(false)
  let totalItems=cartData.length;

 
  const removeFromCart = (id) => {
    const isItemInCart = cartData.find((cartItem) => cartItem.id === id);
  
    if (isItemInCart.quantity === 1) {
      setCartData(cartData.filter((cartItem) => cartItem.id !== id)); // if the quantity of the is 1, remove the from the cart
    } else {
      setCartData(
        cartData.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };
  const addToCart = (id) => {
    const isItemInCart = cartData.find((cartItem) => cartItem.id === id);
  
    if (isItemInCart) 
      setCartData(
        cartData.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } // if the quantity of the is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    };
  
  
  return (

      
    <ValContext.Provider value={{cartData,setCartData,setShowCart,showCart,totalItems,removeFromCart,addToCart}}>
      {children}
    </ValContext.Provider>


  )
}

export {ProviderContext}