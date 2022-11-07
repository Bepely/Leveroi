import React from 'react';

import {VictoryChart, VictoryLine, VictoryLabel, VictoryScatter} from 'victory'
import {useRef, useEffect, useState} from "react"

import "../styles/details/graph.css"





const Graph = ({close, open}) => {
  




  const [height, setHeight] = useState()
  const [width, setWidth] = useState()
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    setWidth(ref.current.clientWidth)
   
  },[width])

  
let victoryData = 
  [{x: "Open", y: Number(open.price), size: 1},
   {x: "Close", y: Number(close.closePrice),
    label: close.closePrice !== NaN ? close.closePrice : 69, size: 4 }, ]

  return (
    
    
    <div className='graph container' id='graph' ref={ref}>
      {close && open && height && width
      ?
      <VictoryChart 
      height={window.innerWidth-window.innerHeight < 0 ? window.innerHeight/3 :  height*0.9  }
      width={width}
     padding={{top: 50, bottom: 50, left: 55, right: 50}} 
    domain={{y: [close.min, close.max]}}
    animate={false}
    
    > 
  

    <VictoryLine

        data={victoryData} 
        style={{ data: { stroke: "#000000", strokeWidth: 3 } }}  
        animate={false}
      />
      <VictoryScatter data={victoryData}
      animate={false}
      style={{ data: {fill:"#000000"}}}
      labelComponent={
       <VictoryLabel 
       animate={false}
       data={victoryData}
       dx={10}
       dy={-20}
       style={[
         {fontSize: "18"}
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
    closePrice: 420,
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