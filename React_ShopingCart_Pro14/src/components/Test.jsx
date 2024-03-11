import React, { useContext } from 'react'
import { ValContext } from './providerContext'

function Test() {
    let {V}=useContext(ValContext)
    console.log(V)
  return (
    <div>
      {V}
      it test
    </div>
  )
}

export default Test
