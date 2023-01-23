import React from 'react'
import { useState } from 'react'

import Option from '../../controlsBlocks/Option'
import * as lcl from "../../../lcl"

const SubOrderConfig = ({open, close, _price}) => {

  console.log(_price);

const [subOpen, setSubOpen] = useState({
    amount: Number(open.amount),
    leverage: Number(open.leverage),
    price: Number(_price),
    fee: Number(open.fee)
})

console.log(subOpen);

const closeTotal = lcl.total(open, {...close, price:_price})


  return (
    <>
    <div className="baseLayer coloCenter">
      <p>Configurate chain order and click button below to create one</p>
    </div>
    <div className='soloCenter blockButton' >
      <h5>configurate chain order</h5>   
    </div>
    </>
  )
}

export default SubOrderConfig