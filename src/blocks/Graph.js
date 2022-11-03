import React from 'react';

import {VictoryChart, VictoryLine, VictoryLabel, VictoryScatter} from 'victory'

import "../styles/details/graph.css"



let scaleRange = [1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5,
                  2.6,
                  2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3]

                  const defaultScale = Math.ceil((scaleRange.length/2))
                  let widthScale
                  let heightScale


let scaleMeasure = () => {
  let widthScaleNum
  let heightScaleNum

  if(window.innerWidth < window.innerHeight){
  widthScaleNum = defaultScale - (((window.innerHeight - window.innerWidth)-(window.innerHeight - window.innerWidth) % 100)/100)
  heightScaleNum = defaultScale + widthScaleNum
  console.log("WIDTH < HEIGHT",widthScaleNum, heightScaleNum);
  } else if (window.innerWidth === window.innerHeight) {
    widthScaleNum = defaultScale
    heightScaleNum = defaultScale
    console.log("WIDTH = HEIGHT",widthScaleNum, heightScaleNum);
  } else {
    widthScaleNum = scaleRange.length - (((window.innerWidth - window.innerHeight)-(window.innerWidth - window.innerHeight) % 100)/100)
    heightScaleNum = scaleRange.length - widthScaleNum+1
    console.log("WIDTH > HEIGHT",widthScaleNum, heightScaleNum)
  }

  widthScale = scaleRange[widthScaleNum-1]
  heightScale = scaleRange[heightScaleNum-1]

  console.log("RESULT", widthScale, heightScale);
}


const Graph = ({close, open}) => {

scaleMeasure()

  
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