import React from 'react'

import Slider from "../reusable/Slider"
import Pair from "../reusable/Pair"

const Display = () => {
  return (
    <div className='block' id='displayRoot'>
        <div className='container' id='displayContainer'>
            {/* Display */}
            <div className='container' id='graphContainer'>
                
                <div className='graph container' id='graph'> </div>
                    
                    
                    <div className='numContainer container' id='currentPriceContainer'>
                        <p className='num bigNum' id='currentPriceNum'>19387</p>
                    </div>
                    <div className=''>
                        <Pair type="inform" first="ROI:" second="505"/>
                        <Pair type="inform" first="PNL" second="303" />
                    </div>
                
                
            </div>
            <div className='sliderControlContainer'>
            <Pair type="inform" first="max" second="19700" />
            <Slider />
            <Pair type="inform" first="min" second="19200" />
            </div>
            
        </div>

    </div>
  )
}

export default Display