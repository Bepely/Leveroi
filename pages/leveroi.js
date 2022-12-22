'use client'
import Head from "next/head"
import {useRouter} from "next/router"

import Header from "../src/appComponents/Header"
import Display from "../src/appComponents/Display"
import Controls from "../src/appComponents/Controls"
import Results from "../src/appComponents/Results"
import CloseConfig from "../src/appComponents/orderView/CloseConfig"


import { useState, useEffect } from "react"


/*
This is a root component of my app
It is a Main Node of a data flow, so it contains a lot of functions 

I do understand that this is a bad pattern, but for now it works
Sonner or later I will reorganize it, but today it is alright =/

12.12.22 Bepely
*/



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
  const [session, setSession] = useState({
    currentOrder: 0,
    currentChain: [0],
    orders: []
  })

  
  //Current close Order state
  const [closeOrder, setCloseOrder] = useState({
    long: true,
    price: 0.08808,
    min: 0,
    max: 200,
    lim0: 0,
    lim1: 0
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
      setCloseOrder({
        long: true,
        price: 0.08808,
        min: 0,
        max: 200,
        lim0: 0,
        lim1: 0
    })
      setOpenOrder(openOrder => ({...x}))
      setSession(session => ({...session, orders: session.orders = [{open: openOrder, close: closeOrder, layer:0, id: 0}]}))
      }
  //Initial Session Switcher
  const _setInit = ()=>{
    if(isQue){setIsQue(isQue => false)}

    setInit(init => !init)
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
 content="Leveroi is an open source futures trading simulator that helps traders learn about and test their strategies. With a reactive graph, results display, and share function, Leveroi is a powerful tool for anyone looking to take their futures trading skills to the next level. Try it out today!"
/>
<meta name="keywords" content="futures, trading, perpetuals, contracts, simulation, reactive, graph, results, display, share, function, open source"/>
<meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />


<link rel="icon" href="logo.svg" type="image/icon type" />


 <meta content="width=device-width, initial-scale=1" name="viewport" />
 <link rel="icon" href="/favicon.ico" /></Head>   


      
      <Display 
         init={init} router={router} isQue = {isQue}
         openOrder={openOrder} setOpenOrder={setOpenOrder}
         closeOrder={closeOrder} setCloseOrder={setCloseOrder}
         session={session} setSession={setSession}
         />
      
        
        <div className="layerBase multiVer" id="interfaceBase">
          <Header />
          {init === true ? 
          <>
            <CloseConfig open={openOrder} setOpen={setOpenOrder}
                         close={closeOrder} setClose={setCloseOrder}
                         session={session} setSession={setSession}/>
            
            <Results open={openOrder} close={closeOrder}
            setCloseOrder = {setCloseOrder} _setInit={_setInit}
            session={session} setSession={setSession}/>
           
           </>
            :
            <Controls openOrderFires={openOrderFires}
            init={init} _setInit={_setInit}
            marketPrice={marketPrice}
            openOrder={openOrder} setOpenOrder={setOpenOrder}/>
          }
          
        </div>
        
         
       


    </div>
  )

}

export default App;
