'use client'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {setAmount, setLeverage, setOpenPrice, setFee, setDefaultOpen} from "../../redux/features/openOrder/openOrderSlice"

/*  
This is a controls Button Component. Basically its swithing instructions to Ads and enters simulation
12.12.22 Bepely

*/


const ControlsButtons = ({sendToDisplay}) => {
  const {openOrder} = useSelector(state => state)


 
  return (
    <div className="multiVer layerFloor dropShadow blockButton">
      
     
        {openOrder.amount <= 0 || openOrder.price <= 0 || openOrder.leverage < 1
        ? <div  className="whMax" disabled>Values shoud be valid</div> :
        <div className="whMax"  onClick={sendToDisplay}>Create order</div>}
      
    </div>
  )
}

export default ControlsButtons