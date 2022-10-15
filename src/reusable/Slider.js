import React from 'react'

const Slider = () => {
  return (
    <div className='sliderContainer'>
        <input 
         className='priceSlider'
         type="range"
         orient="vertial"
         name="priceSlider"
         id="priceSlider" />
    </div>
  )
}

export default Slider