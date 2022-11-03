import React from 'react';

import {VictoryChart, VictoryLine} from 'victory'

import "../styles/details/graph.css"

const defaultScale = 2.6
let widthScale = defaultScale + ((window.innerWidth - window.innerHeight)/1000)
let heightScale = defaultScale - ((window.innerWidth - window.innerHeight)/1000)
console.log(widthScale, heightScale);




const Graph = ({close, open}) => {



  
const victoryData = 
  [{x: "Open order", y: open.price},
   {x: "Close order", y: close.closePrice}]


  return (
    <div className='graph container' id='graph'>
    <VictoryChart  width={window.innerWidth/widthScale} height={window.innerHeight/heightScale}
    domain={{y: [close.min, close.max]}}
    
    > 

    <VictoryLine
        data={victoryData} 
              
      />

    </VictoryChart>
   
   </div>
  )
}

export default Graph