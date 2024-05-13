import { useContext, useState } from 'react'
import Cart from './components/ShopingCart'
import Nav from './components/nav'
import CartPage from './components/CartPage'
import { ValContext } from './components/providerContext'


import './App.css'

function App() {

  let {showCart}=useContext(ValContext)


  return (
   
   
   
   <> 
   <Nav/>
  {
    showCart? <CartPage/> : <Cart/>
  }

 
 </>
   
  )
}

export default App
