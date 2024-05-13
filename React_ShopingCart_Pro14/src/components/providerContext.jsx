import React from "react";
import { useState, createContext, useContext } from "react";


export const ValContext=createContext(null)


function ProviderContext({children}) {
  let [cartData,setCartData]=useState([])
  console.log(cartData)
  let[showCart,setShowCart]=useState(false)
  let totalItems=cartData.length;

  
  
  return (

      
    <ValContext.Provider value={{cartData,setCartData,setShowCart,showCart,totalItems}}>
      {children}
    </ValContext.Provider>


  )
}

export {ProviderContext}