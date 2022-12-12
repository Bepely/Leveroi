import React from 'react'
import * as lcl from "../../lcl"


/*
This is an Interface to Change Minimum, Maximum and Close price of an Order Simulation. 
12.12.22 Bepely
*/

const MinMaxCur = ({open, setOpen, close, setClose}) => {


   
    const enteForceBlur = (e) =>{if (e.key === 'Enter'){e.target.blur()}}
    
    const changeMin = (e) => {lcl.changeMin(close, setClose, e.target.value); e.target.value = null}
    const changeMax = (e) => {lcl.changeMax(close, setClose, e.target.value); e.target.value = null}
    const changeClosePrice = (e) => {lcl.changeClosePrice(close, setClose, e.target.value); e.target.value = null}




  return (
    
    <div className='layerTable' id='nestedTableFieldsDisplay'>
    <div className='layerTable' id=''> 
       <input type="number" className='blockField' onKeyDown={enteForceBlur} onBlur={changeMin}  placeholder={close.min ? lcl.fixCoef(close.min) : 0}/>
        <h5>MIN</h5>
    </div>
        <div className='layerTable' id=''> 
       <input className="blockField" type="number" onKeyDown={enteForceBlur} onBlur={changeClosePrice}  placeholder={close.price}/>
        <h5>Close</h5>
    </div>
    <div className='layerTable' id=''> 
       <input className="blockField" type="number" onKeyDown={enteForceBlur}  onBlur={changeMax} placeholder={close.max ? lcl.fixCoef(close.max) : 1}/>
        <h5>MAX</h5>
    </div>
    </div>

  )
}

export default MinMaxCur