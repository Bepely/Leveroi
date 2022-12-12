'use client'

import {useRef} from "react"

import OrderResultsCard from "./resultsBlocks/OrderResultsCard"
import ResultInputs from "./resultsBlocks/ResultInputs"


/* 
Result components provides results of an Order and Functionality to share it

12.12.22 Bepely*/
const Results = ({close, open, _setInit}) => {

    const snap = useRef()

 return (
   
  <>

    
      <OrderResultsCard open={open} close={close} snap={snap}/>
      <ResultInputs open={open} close={close} snap={snap} _setInit={_setInit}/>
     
  </>
                    
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