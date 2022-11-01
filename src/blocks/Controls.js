import React from 'react'
import Pair from "../reusable/Pair"
import "../styles/blocks/controls.css"


import { useState } from 'react'



const Controls = ({openOrderFires, init, _setInit}) => {

  const [openOrder, setOpenOrder] = useState({
    amount: 420,
    leverage: 1,
    price: 1337
  })


  let transfer = {}

  const sendToDisplay = () => {
    transfer = openOrder
    transfer.value = transfer.amount * transfer.leverage
    transfer.initialised = false
    openOrderFires(transfer)
    _setInit()

    setOpenOrder(openOrder => ({
        amount: Number(transfer.amount),
        leverage: Number(transfer.leverage),
        price: Number(transfer.price)
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
        {openOrder.amount <= 0 || openOrder.price <= 0 || openOrder.leverage < 1
        ? <button className='crButton' disabled>Values shoud be valid</button> :
        <button className='crButton' onClick={sendToDisplay}>Create order</button>}
      
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