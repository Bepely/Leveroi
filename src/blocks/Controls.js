import React from 'react'
import Pair from "../reusable/Pair"
import "../styles/pair.css"

import { useContext } from 'react'
import { configContext } from '../configContext'


const Controls = () => {

  const { config, setConfig } = useContext(configContext) 

  

  
  return (
    
    <div className='block' id='controlsRoot'>
<div className='container' id='controlsContainer'>
      {Object.keys(config).map((key, index)=>{
           return (
            <Pair type="input" key={index} first={key} second=""/>
           )
          })}

</div>
      




       {/* <div className='container' id='controlsContainer'>
            <Pair type="input" first="amount" second=""
             config={config} setConfig={setConfig} target={0}/>
            <Pair type="input" first="entry price" second=""
             config={config} setConfig={setConfig} target={1} />
            <Pair type="input" first="leverage" second=""
             config={config} setConfig={setConfig} target={2}/>
            <Pair type="inform" first="After leverage" second=""
            config={config} setConfig={setConfig} />
            <Pair type="input" first="min" second=""
             config={config} setConfig={setConfig} target={3}/>
            <Pair type="input" first="max" second=""
             config={config} setConfig={setConfig} target={4}/>
  */}
       

    </div>
  )
}

export default Controls