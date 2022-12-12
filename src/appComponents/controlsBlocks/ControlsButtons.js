'use client'
import React from 'react'

/*  
This is a controls Button Component. Basically its swithing instructions to Ads and enters simulation
12.12.22 Bepely

*/


const ControlsButtons = ({open, inDis, inDisSwitch, sendToDisplay}) => {


 
  return (
    <div className="multiVer layerTable" id='blockButton2'>
      
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