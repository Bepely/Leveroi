import React from 'react'


const ControlsButtons = ({open, inDis, inDisSwitch, sendToDisplay}) => {
    console.log(inDis);

  return (
    <div className='layerBase multiHor' id='controlsButtonsBase'>
        <button className='crButton defButton dropShadow' onClick={inDisSwitch}>
          {inDis ? "Instructions" : "Trading Platforms"}
        </button>
        {open.amount <= 0 || open.price <= 0 || open.leverage < 1
        ? <button className='crButton defButton dropShadow' disabled>Values shoud be valid</button> :
        <button className='crButton defButton dropShadow' onClick={sendToDisplay}>Create order</button>}
        </div>
  )
}

export default ControlsButtons