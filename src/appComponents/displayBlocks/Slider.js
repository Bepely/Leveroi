import React from 'react'

import MSlider from "@mui/material/Slider"
import * as lcl from "../../lcl"


/*
Slider Component is a main Order Close Price picker intrerface
12.12.22 Bepely
*/


const Slider = ({closeOrder, setCloseOrder}) => {

let subtraction = Number(closeOrder.max - closeOrder.min)
const changeClosePrice = (e) => {lcl.changeClosePrice(closeOrder, setCloseOrder, e.target.value)}


  return (
    <div className='layerTable soloCenter whMax paddingContent'> 
    {closeOrder.min && closeOrder.max
    ? <MSlider
    id="exactSlider"
    sx={{
      '& input[type="range"]': {
        WebkitAppearance: 'slider-vertical',
          },
        }}
    orientation="vertical"
    valueLabelDisplay="off"
    value={closeOrder.price ? lcl.fixCoef(closeOrder.price) : 0}
    min={lcl.fixCoef(closeOrder.min)}
    max={lcl.fixCoef(closeOrder.max)}
    step={subtraction/50}
    onChange={changeClosePrice}
    color="primary"
/>
:
<>Loading...</>}
      
    </div>
  )
}

Slider.defaultProps = {
  closeOrder:{
    price: 420,
    max: 1337,
    min: 322,
    long: true
  }
}



export default Slider