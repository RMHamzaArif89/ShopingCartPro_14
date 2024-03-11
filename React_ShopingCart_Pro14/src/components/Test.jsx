import React, { useContext } from 'react'
import { ValContext } from './providerContext'

function Test() {
    let {name}=useContext(ValContext)
    console.log(name)
  return (
    <div>
      {name}
      it test
    </div>
  )
}

export default Test
