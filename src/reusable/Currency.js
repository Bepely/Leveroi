import React from 'react'


const Currency = ({subState, setSubState, loadedCurrency, setLoadedCurrency}) => {
    let currency = "custom"
    let currencyUSD = 0


    const onClick = (e) => {
        currency = e.target.getAttribute("p")
        console.log(`Just clicked ${currency}`);
        console.log(loadedCurrency[currency]);

        if (loadedCurrency[currency] === false) {
            fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=usd%2C%20usd&precision=2`)
            .then((res) => res.json().then(data => {
               currencyUSD = data[currency].usd
               setSubState(subState => ({...subState, price:currencyUSD}))
               setLoadedCurrency(loadedCurrency => ({...loadedCurrency,
                [currency]: currencyUSD
            }))
               console.log(loadedCurrency[currency], "LOADED");
            })
            )}
        else {
            setSubState(subState => ({...subState, price: loadedCurrency[currency]}))
            console.log("PRELOADED");
        }  
    }

  return (
    <div id='currencyHolder'>
    <button 
     className={loadedCurrency.bitcoin === currencyUSD ? "currencyBtn pickedCurrencyBtn" : "currencyBtn" } 
     id='btcBtn' p={"bitcoin"} onClick={onClick}>Bitcoin</button>
    <button 
     className={loadedCurrency.ethereum === currencyUSD ? "currencyBtn pickedCurrencyBtn" : "currencyBtn" }
      id='ethBtn' p={"ethereum"} onClick={onClick}>Ethereum</button>
    <button
     className={loadedCurrency.bincacecoin === currencyUSD ? "currencyBtn pickedCurrencyBtn" : "currencyBtn"}
       id='bnbBtn' p={"binancecoin"} onClick={onClick}>BNB</button>
    <button 
     className={loadedCurrency.ripple === currencyUSD ? "currencyBtn pickedCurrencyBtn" : "currencyBtn" }
      id='xrpBtn' p={"ripple"} onClick={onClick}>XRP</button>
    </div>
  )
}

export default Currency