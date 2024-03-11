import React, { useEffect, useRef, useState } from 'react'
import CartCard from './shopCard'
import axios from 'axios'
import { createContext, useContext } from "react";
import { ValContext } from './providerContext';
import './shopingcart.css'


function Cart() {
      let {name}=useContext(ValContext)
      console.log(name)
      
    // let[n,setName]=useState()
    // let[img,setImg]=useState()
    let [products, setProducts] = useState([])
    let [val,setVal]=useState(0)
    let btn=useRef()

    let loadFunc=()=>{
       if(val<8){
        setVal(val+1)
       }
       else{
          btn.current.style.display='none'
       }
    }


    async function getData() {
        const res = await axios.get(`https://dummyjson.com/products?limit=12&skip=${val*12}&select=title,thumbnail,price,id'`)
       

        setProducts(res.data.products)
         


    }

    useEffect(() => {

    getData()
        getData()
    }, [val])
    return (
        <>
        <div className='cart'>
         <div className="cart-con">
         {/* {
                products.map((item) => {
                    return <CartCard key={item.id} price={item.price} h1={item.title} img={item.thumbnail} />
                })
            } */}
         </div>
         <div className="cart-btn" onClick={loadFunc} ref={btn}>
                cart More...
            </div>
           
        </div>
         
            </>
    )
}

export default Cart
