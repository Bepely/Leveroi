import React from 'react'

const Leverage = ({subState, setSubState}) => {

    let onClick = (e) => {
        let newLeverage = e.target.getAttribute("p");
        setSubState(subState => ({...subState, leverage:newLeverage}))
    }

  return (
    <div id='leverageHolder'>
    <button 
     className={subState.leverage == 1 ? "leverageBtn pickedLeverageBtn" : "leverageBtn" } 
     id='lvr1' p={1} onClick={onClick}>x1</button>
    <button 
     className={subState.leverage == 5 ? "leverageBtn pickedLeverageBtn" : "leverageBtn" }
      id='lvr5' p={5} onClick={onClick}>x5</button>
    <button
     className={subState.leverage == 10 ? "leverageBtn pickedLeverageBtn" : "leverageBtn"}
       id='lvr10' p={10} onClick={onClick}>x10</button>
    <button 
     className={subState.leverage == 25 ? "leverageBtn pickedLeverageBtn" : "leverageBtn" }
      id='lvr25' p={25} onClick={onClick}>x25</button>
     <button 
     className={subState.leverage == 50 ? "leverageBtn pickedLeverageBtn" : "leverageBtn" }
      id='lvr50' p={50} onClick={onClick}>x50</button>
    </div>
  )
}

export default Leverage