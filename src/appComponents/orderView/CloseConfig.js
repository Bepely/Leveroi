import React from 'react'

import LongShortButtons from './closeConfig/LongShortButtons'
import MinMaxCur from './closeConfig/MinMaxCur'

const CloseConfig = ({open, close, setOpen, setClose}) => {



  return (
    <div className='layerFloor blockCard multiVer'>
        <LongShortButtons close={close} setClose={setClose}/>
        <MinMaxCur close={close} setClose={setClose} />
    </div>
  )
}

export default CloseConfig