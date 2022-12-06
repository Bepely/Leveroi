import React from 'react'
import Pair from "../reusable/Pair"

import Currency from "../reusable/Currency"
import Leverage from "../reusable/Leverage"
import Amount from "../reusable/Amount"
import Fee from "../reusable/Fee"



const Controls = ({openOrderFires, init, _setInit, setInDis, inDis, marketPrice, openOrder, setOpenOrder}) => {

  


  let transfer = {}

  const sendToDisplay = () => {
    transfer = openOrder
    openOrderFires(transfer)
    _setInit()
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