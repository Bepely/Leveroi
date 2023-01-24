'use client'
import React from 'react'
import Pair from "../reusable/Pair"

import { useSelector, useDispatch } from 'react-redux'

import {setAmount, setLeverage, setOpenPrice, setFee, setDefaultOpen} from "../../redux/features/openOrder/openOrderSlice"
import {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} from "../../redux/features/closeOrder/closeOrderSlice"
import {setBitcoin, setEthereum, setBinancecoin, setRipple } from "../../redux/features/marketPrice/marketPriceSlice"
import {setInitFalse, setInitTrue, setIsQueFalse, setIsQueTrue} from "../../redux/features/session/sessionSlice"

const Amount = ({optName, optConfig, eventAPI, view}) => {

  const {openOrder, marketPrice} = useSelector(state => state);


  const dispatch = useDispatch();


    let onClick = (e) => {
        let newAmount = e.target.getAttribute("p");
        if(optName == "amount"){
          dispatch(setAmount(Number(newAmount)))
        }else if(optName == "leverage"){
          dispatch(setLeverage(Number(newAmount)))
        }else if(optName == "price"){
          dispatch(setOpenPrice(Number(newAmount)))
        }else if(optName == "fee"){
          dispatch(setFee(Number(newAmount)))
        }
    }

    let name;
    if(view){name = view}else{}
    

  return (
    <div key={optName} className='layerFloor multiVer blockCard whMax' id="">
    <Pair type="input" key={optName} first={optName} second={openOrder[optName]}/>
      <div id='controlsOptionsHolder'>
        {optConfig.map((element, index) => {
          return(
          <button key={index}
          className={openOrder[optName] == element.value ? "controlsOptionBtn pickedControlsOptionBtn" : "controlsOptionBtn" } 
          id={element.id} p={element.value} onClick={onClick}>{optName === "price" ? element.name : optName==="leverage" ? `x${element.value}` : element.value }</button>)
        })}
      </div>
    </div>
  )
}

export default Amount