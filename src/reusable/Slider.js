import React from 'react'
import { useContext } from 'react'

import { configContext } from '../configContext'

const Slider = ({aimPrice, setAimPrice}) => {

  const {config} = useContext(configContext)
  

  const changePrice = (e) => {
    setAimPrice(aimPrice => e.target.value)
    console.log(aimPrice);
    }

  return (
    <div className='sliderContainer'>
        <input 
         className='priceSlider'
         type="range"
         orient="vertial"
         name="priceSlider"
         id="priceSlider"
         min={config.min}
         max={config.max}
         value={aimPrice}
         onChange={(changePrice)}
          />
    </div>
  )
}

export default Slider