import React from 'react'

const Amount = ({subState, setSubState}) => {

    let onClick = (e) => {
        let newAmount = e.target.getAttribute("p");
        setSubState(subState => ({...subState, amount:newAmount}))
    }

  return (
    <div id='amountHolder'>
    <button 
     className={subState.amount == 10 ? "amountBtn pickedAmountBtn" : "amountBtn" } 
     id='amt10' p={10} onClick={onClick}>10</button>
    <button 
     className={subState.amount == 50 ? "amountBtn pickedAmountBtn" : "amountBtn" }
      id='amt50' p={50} onClick={onClick}>50</button>
    <button
     className={subState.amount == 100 ? "amountBtn pickedAmountBtn" : "amountBtn"}
       id='amt100' p={100} onClick={onClick}>100</button>
    <button 
     className={subState.amount == 250 ? "amountBtn pickedAmountBtn" : "amountBtn" }
      id='amt250' p={250} onClick={onClick}>250</button>
     <button 
     className={subState.amount == 500 ? "amountBtn pickedAmountBtn" : "amountBtn" }
      id='amt500' p={500} onClick={onClick}>500</button>
    </div>
  )
}

export default Amount