import React from 'react'
import { useState } from 'react';

import Pair from "./Pair"

const Fee = ({subState, setSubState}) => {


    let onClick = (e) => {
            let newAmount = e.target.getAttribute("p");
            setSubState(subState => ({...subState, fee:newAmount}))       
    }

  return (
     
    <>

     

                  <Pair type="input"
                    key={3} first={"fee"} second=""
                    subState={subState}
                    setSubState={setSubState}/>

                    
         <div id='amountHolder'>
         <button 
          className={subState.fee == 0 ? "amountBtn pickedAmountBtn" : "amountBtn" } 
          id='amt10' p={0} onClick={onClick}>0</button>
         <button 
          className={subState.fee == 0.25 ? "amountBtn pickedAmountBtn" : "amountBtn" }
           id='amt50' p={0.25} onClick={onClick}>0.25</button>
         <button
          className={subState.fee == 0.5 ? "amountBtn pickedAmountBtn" : "amountBtn"}
            id='amt100' p={0.5} onClick={onClick}>0.5</button>
         <button 
          className={subState.fee == 0.75 ? "amountBtn pickedAmountBtn" : "amountBtn" }
           id='amt250' p={0.75} onClick={onClick}>0.75</button>
          <button 
          className={subState.fee == 1 ? "amountBtn pickedAmountBtn" : "amountBtn" }
           id='amt500' p={1} onClick={onClick}>1</button>
         </div>
         </>
      
  )
}

export default Fee