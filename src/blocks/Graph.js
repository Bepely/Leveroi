import React from 'react';

import {VictoryChart, VictoryLine, VictoryLabel, VictoryScatter} from 'victory'

import "../styles/details/graph.css"

const defaultScale = 2.6
let widthScale = defaultScale + ((window.innerWidth - window.innerHeight)/1000)
let heightScale = defaultScale - ((window.innerWidth - window.innerHeight)/1000)
console.log(widthScale, heightScale);




const Graph = ({close, open}) => {



  
let victoryData = 
  [{x: "Open", y: Number(open.price), size: 1},
   {x: "Close", y: Number(close.closePrice), label: close.closePrice, size: 4 }, ]

  return (
    <div className='graph container' id='graph'>
    <VictoryChart padding={{top: 50, bottom: 50, left: 55, right: 50}}  width={window.innerWidth/widthScale} height={window.innerHeight/heightScale}
    domain={{y: [close.min, close.max]}}
    
    > 
  

    <VictoryLine

        data={victoryData} 
        style={{ data: { stroke: "#000000", strokeWidth: 3 } }}  
      />
      <VictoryScatter data={victoryData}
      style={{ data: {fill:"#000000"}}}
      labelComponent={
       <VictoryLabel 
       data={victoryData}
       dx={10}
       dy={-20}
       style={[
         {fontSize: "18"}
       ]}/> 
      }
        />

    </VictoryChart>
   
   </div>
  )
}

export default Graph