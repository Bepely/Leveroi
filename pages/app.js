'use client'
import Head from "next/head"
import {useRouter} from "next/router"

import Header from "../src/appComponents/blocks/Header"
import Display from "../src/appComponents/blocks/Display"
import Controls from "../src/appComponents/blocks/Controls"
import Results from "../src/appComponents/blocks/Results"


import { useState, useEffect } from "react"



function App() {
  const router = useRouter()
 
 
  const [isQue, setIsQue] = useState(isQue => false)
  
 
  const [closeOrder, setCloseOrder] = useState({
    long: true,
    price: 0.08808,
    min: 0,
    max: 200
})
  const [inDis, setInDis] = useState(inDis => false)
  const [openOrder, setOpenOrder] = useState({
    amount: 100,
    leverage: 1,
    price: 1337,
    fee: 0
  })
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
    if(isQue){setIsQue(isQue => false)}
    setInDis(inDis => true)
    setInit(init => !init)

  }
  const _setInDis = ()=>{
    setInDis(inDis => !inDis)
  }

  


  useEffect(()=>{
    if(Object.getOwnPropertyNames(router.query).length > 0){
      setIsQue(isQue => true)
      setInit(init => true)
    }
  }, [router.query])

    
 

  return (
    
    <div className="backLayer1" id="appRoot">   
    <Head>
    <title>Leveroi App</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta
 name="description"
 content="Home Page of the Leveroi project made by Bepely. Here you can find information about Leveroi app and instructions to use it."
/>
<meta name="keywords" content="Profit, Loss, Calculator, Roi, Futures, Leverage, Order"/>
<meta name="google-site-verification" content="R432kLJXvfXUt9dWFETX7b_PQpgkOuhY5SEbo-PmVx0" />


<link rel="icon" href="logo.svg" type="image/icon type" />


 <meta content="width=device-width, initial-scale=1" name="viewport" />
 <link rel="icon" href="/favicon.ico" /></Head>   
        <Display 
         init={init} inDis={inDis}
         openOrder={openOrder} setOpenOrder={setOpenOrder}
         closeOrder={closeOrder} setCloseOrder={setCloseOrder}
         router={router}
         isQue = {isQue} setIsQue = {setIsQue}/>
         <Header />
         {init === true ? 
          <Results open={openOrder} close={closeOrder}
          setClose={setCloseOrder} setOpen={setOpenOrder}
          init={init} _setInit={_setInit}/>
          :
          <Controls openOrderFires={openOrderFires}
          init={init} _setInit={_setInit}
          inDis={inDis} setInDis={_setInDis}
          marketPrice={marketPrice}
          openOrder={openOrder} setOpenOrder={setOpenOrder}/>
        }
        
         
       


    </div>
  )

}

export default App;
