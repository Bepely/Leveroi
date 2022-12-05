import React from 'react'
import { useState } from 'react';

import Pair from "./Pair"

const Fee = ({subState, setSubState}) => {


    let onClick = (e) => {
            let newAmount = e.target.getAttribute("p");
            setSubState(subState => ({...subState, fee:Number(newAmount)}))       
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
          className={subState.fee == 0.1 ? "amountBtn pickedAmountBtn" : "amountBtn" }
           id='amt50' p={0.1} onClick={onClick}>0.1</button>
         <button
          className={subState.fee == 0.2 ? "amountBtn pickedAmountBtn" : "amountBtn"}
            id='amt100' p={0.2} onClick={onClick}>0.2</button>
         <button 
          className={subState.fee == 0.3 ? "amountBtn pickedAmountBtn" : "amountBtn" }
           id='amt250' p={0.3} onClick={onClick}>0.3</button>
          <button 
          className={subState.fee == 0.4 ? "amountBtn pickedAmountBtn" : "amountBtn" }
           id='amt500' p={0.4} onClick={onClick}>0.4</button>
         </div>
         </>
      
  )
}

export default Fee