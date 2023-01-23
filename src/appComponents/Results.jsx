'use client'

import {useState, useRef} from "react"


import OrderResultsCard from "./orderView/resultsBlocks/OrderResultsCard"
import ResultInputs from "./orderView/resultsBlocks/ResultInputs"
import TPSL from "./orderView/resultsBlocks/TPSL"


import { useSelector, useDispatch } from 'react-redux'

import {setAmount, setLeverage, setOpenPrice, setFee, setDefaultOpen} from "../redux/features/openOrder/openOrderSlice"
import {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} from "../redux/features/closeOrder/closeOrderSlice"
import {setBitcoin, setEthereum, setBinancecoin, setRipple } from "../redux/features/marketPrice/marketPriceSlice"
import {setInitFalse, setInitTrue, setIsQueFalse, setIsQueTrue} from "../redux/features/session/sessionSlice"



/* 
Result components provides results of an Order and Functionality to share it

12.12.22 Bepely*/
const Results = () => {

  const {openOrder} = useSelector(state => state);
  const {closeOrder} = useSelector(state=>state);
  const {marketPrice} = useSelector(state=>state);
  const {session} = useSelector(state=>state)

  const dispatch = useDispatch();

    const snap = useRef()
    const [subOrderSwitch, setSubOrderSwitch] = useState({price: 0, switch: false})


 return (
   
  <div className="layerBase multiVer" id="sessionSimulationBase">

     
      
      {subOrderSwitch.switch ? 
      <>
      <OrderResultsCard snap={snap}/>
      <TPSL subSwitch={subOrderSwitch} setSubSwitch={setSubOrderSwitch}/>
      
      </>
    
      :
      <>
      <OrderResultsCard snap={snap}/>
      <TPSL subSwitch={subOrderSwitch} setSubSwitch={setSubOrderSwitch}/>
      <ResultInputs snap={snap} subSwitch={subOrderSwitch}/>
      </>
      }
     
     
  </div>
                    
  )
        
 
  
}


export default Results