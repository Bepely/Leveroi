'use client'
import Head from "next/head"
import {useRouter} from "next/router"

import Header from "../src/appComponents/Header"
import Display from "../src/appComponents/Display"
import Controls from "../src/appComponents/Controls"
import Results from "../src/appComponents/Results"
import Session from "../src/appComponents/Session"


import { useState, useEffect } from "react"



function App() {

  //----------------------------------------------------------\\
  //--------------     System Declarations      --------------||
  //----------------------------------------------------------//

  //Declaring of a router instance
  const router = useRouter()
 
  

  //----------------------------------------------------------\\
  //-------------   Config and Order States    ---------------||
  //----------------------------------------------------------//


  //Session State
  const [seesion, setSession] = useState({
    orders: []
  })

  
  //Current close Order state
  const [closeOrder, setCloseOrder] = useState({
    long: true,
    price: 0.08808,
    min: 0,
    max: 200
})
  //Current open Order state
  const [openOrder, setOpenOrder] = useState({
    amount: 100,
    leverage: 1,
    price: 1337,
    fee: 0
  })


  //----------------------------------------------------------\\
  //------------   Process and Utility states    -------------||
  //----------------------------------------------------------//

  //Adv display check state
  const [inDis, setInDis] = useState(inDis => false)
  //Session simulation state
  const [init, setInit] = useState(init => false)
  //Prices API prices state
  const [marketPrice, setMarketPrice] = useState({
    bitcoin: 0,
    ethereum: 0,
    binancecoin: 0,
    ripple: 0
  })
 

  //----------------------------------------------------------\\
  //-------------     Initial Order Config      --------------||
  //----------------------------------------------------------//



  //Configuration of an initial Open order in Session
  const openOrderFires=(x)=>{
      setOpenOrder(openOrder => ({...x}))
      }
  //Initial Session Switcher
  const _setInit = ()=>{
    if(isQue){setIsQue(isQue => false)}
    setInDis(inDis => true)
    setInit(init => !init)
  }
  //Configuration Display Switcher
  const _setInDis = ()=>{
    setInDis(inDis => !inDis)
  }
  //Share order Url readiness state
  const [isQue, setIsQue] = useState(isQue => false)

  
  //----------------------------------------------------------\\
  //---------------          Swithcers         ---------------||
  //----------------------------------------------------------//

   //Loading of an API on simulation/configuration state switch
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

  //Checker of a Query String in a URL 
  useEffect(()=>{
    if(Object.getOwnPropertyNames(router.query).length > 0){
      setIsQue(isQue => true)
      setInit(init => true)
    }
  }, [router.query])

    
 

  return (
    
    <div className="layerGround multiHor" id="appGround">   
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
      
        
        <div className="layerBase multiVer" id="interfaceBase">
        <Header />
         {init === true ? 
           <div className="layerBase multiVer" id="sessionSimulationBase">
          <Session />
          <Results open={openOrder} close={closeOrder}
          setClose={setCloseOrder} setOpen={setOpenOrder}
          init={init} _setInit={_setInit}/>
          </div>
          :
          <Controls openOrderFires={openOrderFires}
          init={init} _setInit={_setInit}
          inDis={inDis} setInDis={_setInDis}
          marketPrice={marketPrice}
          openOrder={openOrder} setOpenOrder={setOpenOrder}/>
        }
        
        </div>
        
         
       


    </div>
  )

}

export default App;
