import React from 'react'




const Slider = ({closeOrder, changeClosePrice}) => {
  

  return (
    <div className='sliderContainer'>
        <input 
         className='priceSlider'
         type="range"
         orient="vertial"
         name="priceSlider"
         id="priceSlider"
         min={closeOrder.min}
         max={closeOrder.max}
         value={closeOrder.closePrice}
         onChange={changeClosePrice}
          />
    </div>
  )
}

Slider.defaultProps = {
  closeOrder:{
    min: 0,
    max:1337,
    value: 420

  }
}

export default Slider