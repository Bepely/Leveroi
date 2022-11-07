import React from 'react'

import MSlider from "@mui/material/Slider"

import "../styles/details/slider.css"





const Slider = ({closeOrder, changeClosePrice}) => {
let subtraction = Number(closeOrder.max - closeOrder.min)
let whatFix;

if(subtraction > 1000){whatFix = 0}
else if(subtraction > 100){whatFix = 1}
else if(subtraction > 10){whatFix = 2}
else if(subtraction > 1){whatFix = 3}
else if(subtraction > 0.1){whatFix = 4}
else if(subtraction > 0.01){whatFix = 5}
else if(subtraction > 0.001){whatFix = 6}
else{whatFix = 7}


  return (
    <div className='sliderContainer'> 
      <MSlider
          id="exactSlider"
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
                },
              }}
          orientation="vertical"
          valueLabelDisplay="off"
          value={Number(closeOrder.closePrice).toFixed(whatFix)}
          min={Number(closeOrder.min)}
          max={Number(closeOrder.max)}
          step={subtraction/50}
          onChange={changeClosePrice}
          color="primary"
      />
    </div>
  )
}



export default Slider