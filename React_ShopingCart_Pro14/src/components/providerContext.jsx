// import React, { Children } from 'react'
'use client'
import React, { Children } from "react";
import { useState, createContext, useContext } from "react";


export const ValContext=createContext(null)
  

function ProviderContext({children}) {
   
    let[t,setT]=useState(1)
    
    const total=()=>{
    setT(t+1)
    }
  return (

      
    <ValContext.Provider value={{total,t}}>
      {children}
    </ValContext.Provider>


  )
}

export {ProviderContext}