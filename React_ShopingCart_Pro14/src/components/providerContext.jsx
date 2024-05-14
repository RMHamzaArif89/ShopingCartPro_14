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
      setCartData(cartData.filter((cartItem) => cartItem.id !== id));
    } else {
      setCartData(
        cartData.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
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
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        )
      );
    };



    const clearCart = () => {
      setCartItems([]);
    };


    const totalPrice=()=>{
     
        return cartData.reduce((total, item) => total + item.price * item.quantity, 0); // calculate the total price of the items in the cart
    }
  
  
  return (

      
    <ValContext.Provider value={{cartData,setCartData,setShowCart,showCart,totalItems,removeFromCart,addToCart,totalPrice}}>
      {children}
    </ValContext.Provider>


  )
}

export {ProviderContext}