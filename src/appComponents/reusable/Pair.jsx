import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {setAmount, setLeverage, setOpenPrice, setFee, setDefaultOpen} from "../../redux/features/closeOrder/openOrderSlice"
import {setBitcoin, setEthereum, setBinancecoin, setRipple } from "../../redux/features/marketPrice/marketPriceSlice"

const Pair = ({first, second}) => { 



  const dispatch = useDispatch();
 
    let onChange = (e) => {
      let newAmount = e.target.getAttribute("p");
      if(first == "bitcoin"){
        dispatch(setBitcoin(Number(newAmount)))
      }else if(first == "ethereum"){
        dispatch(setEthereum(Number(newAmount)))
      }else if(first == "binancecoin"){
        dispatch(setBinancecoin(Number(newAmount)))
      }else if(first == "ripple"){
        dispatch(setRipple(Number(newAmount)))
      }
    }

  return (
    <div className='layerTable multiHor whMax'>
         
            <div className='inputPair pair paddingContent' >
                 <p className='pairFirst pairText pairChild hText'>{first}</p>  
                 <input className='blockField layerTable' 
                 type="number" name={second} id={second} placeholder={second} 
                 onChange={(e)=>{onChange(e)}}/> 
            </div>

       
    </div>
  )
}



Pair.defaultProps = {
    type: "text-text",
    first: "NOT",
    second: "DEFINED"
}

export default Pair