// import React, { Children } from 'react'
'use client'
import React, { Children } from "react";
import { useState, createContext, useContext } from "react";


export const ValContext=createContext(null)
  

function ProviderContext({children}) {
    let[v,setName]=useState('value')
    let context={v}
    const Changename=(p)=>{
      setName(p)
    }
  return (

      
    <ValContext.Provider value={{v,name:'hamza',Changename}}>
      {children}
    </ValContext.Provider>


  )
}

export {ProviderContext}