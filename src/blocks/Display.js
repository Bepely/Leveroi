import React, { useState, useContext } from 'react'
import { configContext } from '../configContext'

import Slider from "../reusable/Slider"
import Pair from "../reusable/Pair"




const Display = () => {

    const [aimPrice, setAimPrice] = useState(0)
    const { config } = useContext(configContext) 

    const entryOrder =  (config.amount * config.leverage)/config.entryPrice
    const aimOrder = entryOrder * aimPrice
    const pnl =  aimOrder - entryOrder

  return (
    <div className='block' id='displayRoot'>
        <div className='container' id='displayContainer'>
            {/* Display */}
            <div className='container' id='graphContainer'>
                
                <div className='graph container' id='graph'> </div>
                    
                    
                    <div className='numContainer container' id='currentPriceContainer'>
                        <p className='num bigNum' id='currentPriceNum'>{aimPrice}</p>
                    </div>
                    <div className=''>
                        <Pair type={"inform"} first={"result"}
                        second={pnl} />
                    </div>
                
                
            </div>
            <div className='sliderControlContainer'>
            <Pair type="inform" first="max" second={config.max} />
            <Slider aimPrice={aimPrice} setAimPrice={setAimPrice}/>
            <Pair type="inform" first="min" second={config.min} />
            </div>
            
        </div>

    </div>
  )
}

export default Display