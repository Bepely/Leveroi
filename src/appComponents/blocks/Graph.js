import React from 'react';

import {VictoryChart, VictoryLine, VictoryLabel, VictoryScatter, VictoryArea} from 'victory'
import {useRef, useEffect, useState} from "react"

import * as lcl from "../../lcl"







const Graph = ({close, open}) => {
  

  const [height, setHeight] = useState()
  const [width, setWidth] = useState()
  const ref = useRef(null)

  useEffect(() => {
    
    setHeight(ref.current.clientHeight)
    setWidth(ref.current.clientWidth)

  },[height])



  
let victoryData = 
  [{x: "Open", y: Number(open.price), size: 1},
   {x: "Close", y:  Number(close.price),
    label:  close.price, size: 4 },]

let liquidationDataLong = [
  {x: "Open", y:  lcl.liquidation(open,close), size:1},
  { x: "Close", y:  lcl.liquidation(open,close), size:1}
]
let liquidationDataShort = [
  {x: "Open", y:  lcl.liquidation(open,close), size:1},
  { x: "Close", y:  lcl.liquidation(open,close), size:1}
]

  return (
    
    
    <div className='soloCenter layerTable' id='graph' ref={ref}>
      {close && open && height && width
      ?
      <VictoryChart 
      height={window.innerWidth-window.innerHeight < 0 ? window.innerHeight/3 :  height  }
      width={width}
      style={!close.long ? {background: { fill: "#9B000030", fontFamily:'Rubik' }} : {data: {fill: "#ECE9EC30", fontFamily:'Rubik'}}}
     padding={{top: 50, bottom: 50, left: 55, right: 50}} 
    domain={{y: [close.min, close.max]}}
    animate={false}
    
    > 
   <VictoryArea
      key={"liquidation"}
      data={close.long ? liquidationDataLong : liquidationDataShort}
      style={close.long ? {data : {fill: "#9B000030", fontFamily:'Rubik'}} : {data: {fill: "#ECE9EC", fontFamily:'Rubik'}}}
      />

    <VictoryLine
        key={"orderLine"}
        data={victoryData} 
        style={{ data: { stroke: "#000000", strokeWidth: 3 } }}  
        animate={false}
      />
     
      <VictoryScatter data={victoryData}
      animate={false}
      style={{ data: {fill:"#000000", fontFamily:'Rubik'}}}
      labelComponent={
       <VictoryLabel 
       animate={false}
       data={victoryData}
       dx={10}
       dy={-20}
       style={[
         {fontSize: "18", fontFamily:'Rubik'}
       ]}/> 
      }
        />
        

    </VictoryChart>
    :
    <>loading...</>
     }
      
    
   
   </div>
  )
}

Graph.defaultProps = {
  close:{
    price: 420,
    max: 1337,
    min: 322,
    long: true
  },
  open:{
    amount: 420,
    leverage: 69,
    price: 1337
  }
}


export default Graph