'use client'
import React from 'react'

import Option from "./controlsBlocks/Option"
import ControlsButtons from './controlsBlocks/ControlsButtons'

import { useSelector, useDispatch } from 'react-redux'

import {setAmount, setLeverage, setOpenPrice, setFee, setDefaultOpen} from "../redux/features/closeOrder/openOrderSlice"
import {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} from "../redux/features/openOrder/closeOrderSlice"
import {setBitcoin, setEthereum, setBinancecoin, setRipple } from "../redux/features/marketPrice/marketPriceSlice"
import {setInitFalse, setInitTrue, setIsQueFalse, setIsQueTrue} from "../redux/features/session/sessionSlice"



const Controls = ({openOrderFires, setInDis, inDis, setOpenOrder}) => {


  const {openOrder} = useSelector(state => state);
  const {closeOrder} = useSelector(state=>state);
  const {marketPrice} = useSelector(state=>state);
  const {session} = useSelector(state=>state)

  const dispatch = useDispatch();

  


  let transfer = {}

  const sendToDisplay = () => {
    dispatch(setDefaultClose())
    dispatch(setInitTrue())
}

  
  return (
    <>
    <div className='layerBase multiVer' id="controlsBaseNest">
                      
                                      
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
<div className="soloCenter layerBase  toBot">
<ControlsButtons sendToDisplay={sendToDisplay} /> 
</div>
</>
  )
} 

export default Controls