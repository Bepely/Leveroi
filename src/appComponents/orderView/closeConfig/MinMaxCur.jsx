import React from 'react'
import * as lcl from "../../../lcl"

import { useSelector, useDispatch } from 'react-redux'
import {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} from "../../../redux/features/closeOrder/closeOrderSlice"




/*
This is an Interface to Change Minimum, Maximum and Close price of an Order Simulation. 
12.12.22 Bepely
*/

const MinMaxCur = () => {

  const {closeOrder} = useSelector(state=>state);

  const dispatch = useDispatch()


   
    const enteForceBlur = (e) =>{if (e.key === 'Enter'){e.target.blur()}}
    

    const changeMin = (e) => {
      let value = e.target.value
        if(value){
          let x = lcl.fixCoef(value)
          
          if(x >= closeOrder.max){console.log("preventMoreOne")}
          else if(x <= 0 || x === null){}
          else{dispatch(setMin(x))}
          value = null
        }else{}
        e.target.value = null
    }

    const changeMax = (e) => {
      let value = e.target.value
      if(value){
          let x = fixCoef(value) 
               
          if(x <= 0 || x === null){}
          else if(x <= closeOrder.min){console.log("preventLessOne");}
          else{dispatch(setMax(x))} 
          value = null
      }else{}
      e.target.value = null
    }



    const changeClosePrice = (e) => {
      let value = e.target.value
        if(value){
          
                  
          dispatch(setClosePrice(x))
          value = null
          if(x > closeOrder.max)
          {dispatch(setMax(x))}
          else if (x < closeOrder.min) 
          {dispatch(setMin(x))}
      }else{}}




  return (
    
    <div className='layerTable' id='nestedTableFieldsDisplay'>
    <div className='layerTable' id=''> 
       <input type="number" className='blockField' onKeyDown={enteForceBlur} onBlur={changeMin}  placeholder={closeOrder.min ? lcl.fixCoef(closeOrder.min) : 0}/>
        <h5>MIN</h5>
    </div>
        <div className='layerTable' id=''> 
       <input className="blockField" type="number" onKeyDown={enteForceBlur} onBlur={changeClosePrice}  placeholder={closeOrder.price}/>
        <h5>Close</h5>
    </div>
    <div className='layerTable' id=''> 
       <input className="blockField" type="number" onKeyDown={enteForceBlur}  onBlur={changeMax} placeholder={closeOrder.max ? lcl.fixCoef(closeOrder.max) : 1}/>
        <h5>MAX</h5>
    </div>
    </div>

  )
}

export default MinMaxCur