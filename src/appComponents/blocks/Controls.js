import React from 'react'
import Pair from "../reusable/Pair"

import Currency from "../reusable/Currency"
import Leverage from "../reusable/Leverage"
import Amount from "../reusable/Amount"
import Fee from "../reusable/Fee"



import { useState } from 'react'



const Controls = ({openOrderFires, init, _setInit, setInDis, inDis, marketPrice}) => {

  const [openOrder, setOpenOrder] = useState({
    amount: 100,
    leverage: 1,
    price: 1337,
    fee: 0
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
        price: Number(transfer.price),
        fee: Number(transfer.fee)
              }))
    
  }

  const inDisSwitch = () =>{
    setInDis(inDis => !inDis)
  }

  

  
  return (
    
    <div className=' block resultControls' id={init === true ? 'controlsRoot' : 'controlsRootNoResult' }>
      {init === false ? 
      <div id='controlsWrapper'>

        
       
        <div className='controlsHolder' id='controlsContainer'>
              {Object.keys(openOrder).map((key, index)=>{
                if(key !== "fee"){
                  return (
                    <div className='controlsPoint backLayer2 dropShadow containerBox' key={index} id={key === "amount" ? "amountControlsPoint" : ""}>
                    <Pair type="input"
                    key={index} first={key} second=""
                    subState={openOrder}
                    setSubState={setOpenOrder}/>
                    {key === "price" ?
                    <Currency subState={openOrder} setSubState={setOpenOrder}
                    marketPrice={marketPrice}/>
                   : key === "leverage" ?
                    <Leverage subState={openOrder} setSubState={setOpenOrder}/>
                  : key === "amount" ?
                    <Amount subState={openOrder} setSubState={setOpenOrder}/>
                : <></> }
                    
                    </div>
                  )
                } else if(key == "fee") {
                   return ( <div key="fee" className='controlsPoint backLayer2 dropShadow containerBox' id="">
                      <Fee subState={openOrder} setSubState={setOpenOrder}/>
                    </div>)
                }
             
              })}
        </div>
        <div id='btnsHolder'>
        <button className='crButton defButton dropShadow' onClick={inDisSwitch}>
          {inDis ? "Show Instructions" : "Show Trading Platforms"}
        </button>
        {openOrder.amount <= 0 || openOrder.price <= 0 || openOrder.leverage < 1
        ? <button className='crButton defButton dropShadow' disabled>Values shoud be valid</button> :
        <button className='crButton defButton dropShadow' onClick={sendToDisplay}>Create order</button>}
        </div>
        
      </div>

    : 
    <></>
    }
</div>
  )
}

export default Controls