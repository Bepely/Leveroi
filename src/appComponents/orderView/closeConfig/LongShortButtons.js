import React from 'react'

/*
This is a Switcher between Long and Short Position
12.12.22 Bepely
*/

const LongShortButtons = ({close, setClose}) => {

    const longShortChange = () => {
        
        setClose(close => close.long === true
                    ?({...close, long: false})
                    :({...close, long: true}))
    }



  return (
    
                    
                        
                    <div className="layerTable multiHor" id='nestedTableButtonsDisplay'>
                        <button className={`${close.long ? `picked` : `toPick`} greenButton`}
                        disabled={close.long ? true : false} 
                        onClick={longShortChange}>LONG</button>
                        <button className={`${!close.long ? `picked` : `toPick`} redButton`} 
                        disabled={close.long ? false : true} 
                        onClick={longShortChange}>SHORT</button>
                                    
                    </div>
  )
}

export default LongShortButtons