import React from 'react'

import MSlider from "@mui/material/Slider"





const Slider = ({closeOrder, changeClosePrice}) => {


  return (
    <div className='sliderContainer'> 
      <MSlider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
                },
              }}
          orientation="vertical"
          valueLabelDisplay="on"
          value={Number(closeOrder.closePrice)}
          min={closeOrder.min}
          max={closeOrder.max}
          onChange={changeClosePrice}
      />
    </div>
  )
}



export default Slider