import React from 'react'
import Pair from "../reusable/Pair"
import "../styles/pair.css"

import { useState } from 'react'



const Controls = ({openOrderFires, init, _setInit}) => {

  const [openOrder, setOpenOrder] = useState({
    amount: 0,
    leverage: 1,
    price: 100
  })


  let transfer = {}

  const sendToDisplay = () => {
    transfer = openOrder
    transfer.value = transfer.amount * transfer.leverage
    transfer.initialised = false
    openOrderFires(transfer)
    _setInit()

    setOpenOrder(openOrder => ({
        amount: transfer.amount,
        leverage: transfer.leverage,
        price: transfer.price
              }))
    
  }

  

  
  return (
    
    <div className='block resultControls' id={init === true ? 'controlsRoot' : 'controlsRootNoResult' }>
      {init === false ? 
      <div id='controlsWrapper'>
        <div className='container' id='controlsContainer'>
              {Object.keys(openOrder).map((key, index)=>{
                return (
                  <Pair type="input"
                  key={index} first={key} second=""
                  subState={openOrder}
                  setSubState={setOpenOrder}/>
                )
              })}
        </div>

      <button className='crButton' onClick={sendToDisplay}>Create order</button>
      </div>

    : 
    <div className='container' id='controlsContainer'>
      <button className='crButton' onClick={_setInit}> configurate new order</button>
    </div>
    }
</div>
  )
}

export default Controls