'use client'

import Header from "../src/appComponents/blocks/Header"
import Display from "../src/appComponents/blocks/Display"
import Controls from "../src/appComponents/blocks/Controls"
import Results from "../src/appComponents/blocks/Results"


import { useState, useEffect } from "react"



function App() {

 
  const [closeOrder, setCloseOrder] = useState({
    long: true,
    closePrice: 100,
    min: 0,
    max: 200
})
  const [inDis, setInDis] = useState(inDis => false)
  const [openOrder, setOpenOrder] = useState({})
  const [init, setInit] = useState(init => false)

  const [marketPrice, setMarketPrice] = useState({
    bitcoin: 0,
    ethereum: 0,
    binancecoin: 0,
    ripple: 0
  })

  useEffect(()=>{
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cripple&vs_currencies=usd")
    .then((res) => res.json().then(data => {
        setMarketPrice(marketPrice => ({...marketPrice, 
          bitcoin: data.bitcoin.usd,
          ethereum: data.ethereum.usd,
          binancecoin: data.binancecoin.usd,
          ripple: data.ripple.usd}))

    }))
  }, [init])




  const openOrderFires=(x)=>{
      setOpenOrder(openOrder => ({...x}))
      }
  const _setInit = ()=>{
    setInDis(inDis => true)
    setInit(init => !init)
  }
  const _setInDis = ()=>{
    setInDis(inDis => !inDis)
  }

 

  return (
    
    <div className="backLayer1" id="appRoot">      
        <Display 
         init={init} inDis={inDis}
         openOrder={openOrder}
         closeOrder={closeOrder} setCloseOrder={setCloseOrder}/>
         <Header />
         {init === true ? 
          <Results open={openOrder} close={closeOrder}
          setClose={setCloseOrder} setOpen={setOpenOrder}
          init={init} _setInit={_setInit}/>
          :
          <Controls openOrderFires={openOrderFires}
          init={init} _setInit={_setInit}
          inDis={inDis} setInDis={_setInDis}
          marketPrice={marketPrice}/>
        }
        
         
       


    </div>
  )

}

export default App;
