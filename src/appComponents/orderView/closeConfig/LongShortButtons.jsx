import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} from "../../../redux/features/openOrder/closeOrderSlice"

/*
This is a Switcher between Long and Short Position
12.12.22 Bepely
*/

const LongShortButtons = () => {

  const {closeOrder} = useSelector(state=>state);

  const dispatch = useDispatch()

    



  return (
    
                    
                        
                    <div className="layerTable multiHor" id='nestedTableButtonsDisplay'>

                        <button className={`${closeOrder.long ? `picked` : `toPick`} greenButton`}
                        disabled={closeOrder.long ? true : false} 
                        onClick={()=>{dispatch(setLong())}}>LONG</button>
                        <button className={`${!closeOrder.long ? `picked` : `toPick`} redButton`} 
                        disabled={closeOrder.long ? false : true} 
                        onClick={()=>{dispatch(setShort())}}>SHORT</button>
                                    
                    </div>
  )
}

export default LongShortButtons