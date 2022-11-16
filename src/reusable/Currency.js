import React from 'react'


const Currency = ({subState, setSubState, marketPrice}) => {
    let currency = "custom"

    const onClick = (e) => {
        currency = e.target.getAttribute("p")      

        if (marketPrice[currency] === 0) {
            console.log("Still not Loaded");
        }
        else {
            setSubState(subState => ({...subState, price: marketPrice[currency]}))
        }  
    }

  return (
    <div id='currencyHolder'>
    <button 
     className={marketPrice.bitcoin === subState.price ? "currencyBtn pickedCurrencyBtn" : "currencyBtn" } 
     id='btcBtn' p={"bitcoin"} onClick={onClick}>Bitcoin</button>
    <button 
     className={marketPrice.ethereum === subState.price ? "currencyBtn pickedCurrencyBtn" : "currencyBtn" }
      id='ethBtn' p={"ethereum"} onClick={onClick}>Ethereum</button>
    <button
     className={marketPrice.binancecoin === subState.price ? "currencyBtn pickedCurrencyBtn" : "currencyBtn"}
       id='bnbBtn' p={"binancecoin"} onClick={onClick}>BNB</button>
    <button 
     className={marketPrice.ripple === subState.price ? "currencyBtn pickedCurrencyBtn" : "currencyBtn" }
      id='xrpBtn' p={"ripple"} onClick={onClick}>XRP</button>
    </div>
  )
}

export default Currency