// import React, { Children } from 'react'
'use client'
import React, { Children } from "react";
import { useState, createContext, useContext } from "react";


export const ValContext=createContext(null)
  

function ProviderContext({children}) {
    let[v,setVal]=useState('value')
    let context={v}
    const value='hamza'
  return (

      
    <ValContext.Provider value={{v,name:'hamza'}}>
      {children}
    </ValContext.Provider>


  )
}

export {ProviderContext}