import React from 'react'
import Pair from "../reusable/Pair"
import Currency from "../reusable/Currency"
import "../styles/blocks/controls.css"
import "../styles/details/button.css"


import { useState } from 'react'



const Controls = ({openOrderFires, init, _setInit, setInDis, inDis}) => {

  const [openOrder, setOpenOrder] = useState({
    amount: 420,
    leverage: 1,
    price: 1337
  })
  const [loadedCurrency, setLoadedCurrency] = useState({
      bitcoin: false,
      ethereum: false,
      binancecoin: false,
      ripple: false
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

  const inDisSwitch = () =>{
    setInDis(inDis => !inDis)
  }

  

  
  return (
    
    <div className=' block resultControls' id={init === true ? 'controlsRoot' : 'controlsRootNoResult' }>
      {init === false ? 
      <div id='controlsWrapper'>

        <Currency subState={openOrder} setSubState={setOpenOrder}
        loadedCurrency={loadedCurrency} setLoadedCurrency={setLoadedCurrency} />
       
        <div className='backLayer2 dropShadow container containerBox' id='controlsContainer'>
              {Object.keys(openOrder).map((key, index)=>{
                return (
                  <Pair type="input"
                  key={index} first={key} second=""
                  subState={openOrder}
                  setSubState={setOpenOrder}/>
                )
              })}
        </div>
        <div id='btnsHolder'>
        <button className='crButton defButton' onClick={inDisSwitch}>
          {inDis ? "Show Instructions" : "Show Trading Platforms"}
        </button>
        {openOrder.amount <= 0 || openOrder.price <= 0 || openOrder.leverage < 1
        ? <button className='crButton defButton' disabled>Values shoud be valid</button> :
        <button className='crButton defButton' onClick={sendToDisplay}>Create order</button>}
        </div>
        
      </div>

    : 
    <div className='container' id='controlsContainer'>
      <button className='crButton defButton' onClick={_setInit}> configurate new order</button>
    </div>
    }
</div>
  )
}

export default Controls