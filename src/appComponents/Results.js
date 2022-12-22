'use client'

import {useState, useRef} from "react"


import OrderResultsCard from "./orderView/resultsBlocks/OrderResultsCard"
import ResultInputs from "./orderView/resultsBlocks/ResultInputs"
import TPSL from "./orderView/resultsBlocks/TPSL"
import ChainOrderConfig from './orderView/resultsBlocks/ChainOrderConfig'


/* 
Result components provides results of an Order and Functionality to share it

12.12.22 Bepely*/
const Results = ({close, open, _setInit, setCloseOrder, session, setSession}) => {

    const snap = useRef()
    const [subOrderSwitch, setSubOrderSwitch] = useState({price: 0, switch: false})

    console.log(typeof subOrderSwitch.price);


 return (
   
  <div className="layerBase multiVer" id="sessionSimulationBase">

     
      
      {subOrderSwitch.switch ? 
      <>
      <OrderResultsCard open={open} close={close} snap={snap}/>
      <TPSL open={open} close={close} setCloseOrder={setCloseOrder}   subSwitch={subOrderSwitch} setSubSwitch={setSubOrderSwitch}/>
      
      </>
    
      :
      <>
      <OrderResultsCard open={open} close={close} snap={snap}/>
      <TPSL open={open} close={close} setCloseOrder={setCloseOrder}   subSwitch={subOrderSwitch} setSubSwitch={setSubOrderSwitch}/>
      <ResultInputs open={open} close={close} snap={snap} _setInit={_setInit} subSwitch={subOrderSwitch}/>
      </>
      }
     
     
  </div>
                    
  )
        
 
  
}

Results.defaultProps = {
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
  },
  init: true
}

export default Results