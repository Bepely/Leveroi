'use client'
import React from 'react'

import MSlider from "@mui/material/Slider"
import * as lcl from "../../lcl"

import { useSelector, useDispatch } from 'react-redux'

import {setAmount, setLeverage, setOpenPrice, setFee, setDefaultOpen} from "../../redux/features/openOrder/openOrderSlice"
import {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} from "../../redux/features/closeOrder/closeOrderSlice"



/*
Slider Component is a main Order Close Price picker intrerface
12.12.22 Bepely
*/


const Slider = () => {
  const dispatch = useDispatch();
  const {closeOrder} = useSelector(state=>state);

let subtraction = Number(closeOrder.max - closeOrder.min)

const changeClosePrice = (e) => {
  let value = e.target.value
    if(value){
      let x = lcl.fixCoef(value)      
      dispatch(setClosePrice(x))
      value = null
      if(x > close.max)
      {dispatch(setMax(x))}
      else if (x < close.min) 
      {dispatch(setMin(x))}
  }else{}}


  


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
    marks={[{label:"Limit 1", value:closeOrder.lim0}, {label:"Limit 2", value:closeOrder.lim1}]}
    step={subtraction/50}
    onChange={changeClosePrice}
    color="primary"
/>
:
<>Loading...</>}
      
    </div>
  )
}


export default Slider