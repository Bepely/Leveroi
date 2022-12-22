'use client'
import React from 'react'

/*  
This is a controls Button Component. Basically its swithing instructions to Ads and enters simulation
12.12.22 Bepely

*/


const ControlsButtons = ({open, sendToDisplay}) => {


 
  return (
    <div className="multiVer layerFloor dropShadow blockButton">
      
     
        {open.amount <= 0 || open.price <= 0 || open.leverage < 1
        ? <div  className="whMax" disabled>Values shoud be valid</div> :
        <div className="whMax"  onClick={sendToDisplay}>Create order</div>}
      
    </div>
  )
}

export default ControlsButtons