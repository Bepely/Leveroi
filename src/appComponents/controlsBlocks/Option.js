'use client'
import React from 'react'
import Pair from "../reusable/Pair"

const Amount = ({subState, setSubState, optName, optConfig, eventAPI}) => {

    let onClick = (e) => {
        let newAmount = e.target.getAttribute("p");
        setSubState(subState => ({...subState, [optName]:Number(newAmount)}))
    }

  return (
    <div key={optName} className='layerFloor multiVer blockCard whMax' id="">
    <Pair type="input" key={optName} first={optName} subState={subState} setSubState={setSubState}/>
      <div id='controlsOptionsHolder'>
        {optConfig.map((element, index) => {
          return(
          <button key={index}
          className={subState[optName] == element.value ? "controlsOptionBtn pickedControlsOptionBtn" : "controlsOptionBtn" } 
          id={element.id} p={element.value} onClick={onClick}>{optName === "price" ? element.name : optName==="leverage" ? `x${element.value}` : element.value }</button>)
        })}
      </div>
    </div>
  )
}

export default Amount