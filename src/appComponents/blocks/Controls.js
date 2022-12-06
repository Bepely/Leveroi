import React from 'react'

import Option from "../reusable/Option"

import ControlsButtons from '../controls/controlsButtons'



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
    <>
    <div className='layerBaseNested multiVer' id="controlsBaseNest">
                      
                                      
                    <Option subState={openOrder} setSubState={setOpenOrder}
                    optName={"amount"} optConfig={[{id: 0, value: 10},{id: 1, value: 50},{id: 2, value: 100},{id:3, value: 250}, {id: 4, value: 500}]}
                    />
                   
                    <Option subState={openOrder} setSubState={setOpenOrder}
                    optName={"leverage"} optConfig={[{id: 0, value: 1},{id: 1, value: 5},{id: 2, value: 10},{id:3, value: 25}, {id: 4, value: 50}]}
                    />
                  
                    <Option subState={openOrder} setSubState={setOpenOrder}
                    optName={"price"} optConfig={[
                      {id: 0, value: marketPrice.bitcoin, name: "BTC"},
                      {id: 1, value: marketPrice.ethereum, name: "ETH"},
                      {id: 2, value: marketPrice.binancecoin, name: "BNB"},
                      {id:3, value: marketPrice.ripple, name: "XRP"}]}
                    eventAPI={marketPrice}
                    />

                    <Option subState={openOrder} setSubState={setOpenOrder}
                    optName={"fee"} optConfig={[{id: 0, value: 0},{id: 1, value: 0.1},{id: 2, value: 0.2},{id: 3, value: 0.3}, {id: 4, value: 0.4}]}
                    />       
                
    
</div>
<div className="soloCenter layerBase" id="contorlsButtionBase">
<ControlsButtons open={openOrder} inDis={inDis} inDisSwitch={inDisSwitch} sendToDisplay={sendToDisplay} /> 
</div>
</>
  )
} 

export default Controls