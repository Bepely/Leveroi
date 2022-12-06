'use client'
import React from 'react'


const ControlsButtons = ({open, inDis, inDisSwitch, sendToDisplay}) => {


  return (
    <div className="multiHor tlayerTable " id="blockButton">
        <a  onClick={inDisSwitch}>
          {inDis ? "Instructions" : "Trading Platforms"}
        </a>
        {open.amount <= 0 || open.price <= 0 || open.leverage < 1
        ? <a  disabled>Values shoud be valid</a> :
        <a  onClick={sendToDisplay}>Create order</a>}
        </div>
  )
}

export default ControlsButtons