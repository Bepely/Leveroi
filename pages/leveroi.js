'use client'
import Head from "next/head"

import {useRouter} from "next/router"





import Header from "../src/appComponents/Header"
import Display from "../src/appComponents/Display"
import Controls from "../src/appComponents/Controls"
import Results from "../src/appComponents/Results"
import CloseConfig from "../src/appComponents/orderView/CloseConfig"

import { useSelector, useDispatch } from 'react-redux'

import {setAmount, setLeverage, setOpenPrice, setFee, setDefaultOpen} from "../src/redux/features/openOrder/openOrderSlice"
import {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} from "../src/redux/features/closeOrder/closeOrderSlice"
import {setBitcoin, setEthereum, setBinancecoin, setRipple } from "../src/redux/features/marketPrice/marketPriceSlice"
import {setInitFalse, setInitTrue, setIsQueFalse, setIsQueTrue} from "../src/redux/features/session/sessionSlice"


import { useState, useEffect } from "react"


/*
This is a root component of my app
It is a Main Node of a data flow, so it contains a lot of functions 

I do understand that this is a bad pattern, but for now it works
Sonner or later I will reorganize it, but today it is alright =/

12.12.22 Bepely
*/



function App() {

  const {session} = useSelector(state=>state)

  const dispatch = useDispatch();

  //----------------------------------------------------------\\
  //--------------     System Declarations      --------------||
  //----------------------------------------------------------//

  //Declaring of a router instance
  const router = useRouter()
 
  

   //Loading of an API on simulation/configuration state switch
   useEffect(()=>{
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cripple&vs_currencies=usd")
    .then((res) => res.json().then(data => {
          dispatch(setBitcoin(data.bitcoin.usd))
          dispatch(setEthereum(data.ethereum.usd))
          dispatch(setBinancecoin(data.binancecoin.usd))
          dispatch(setRipple(data.ripple.usd))
    }))
  }, [session.init])

  //Checker of a Query String in a URL 
  useEffect(()=>{
    if(Object.getOwnPropertyNames(router.query).length > 0){
      dispatch(setIsQueTrue())
      dispatch(setInitTrue())
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


      
          <Display router={router}/>
        <div className="layerBase multiVer" id="interfaceBase">
            <Header router={router}/>
          {session.init === true ? 
          <>
            <CloseConfig/>
            <Results />
          </>
            :
            <Controls />
          }
          
        </div>
        
      
      
            
</div>

  )

}

export default App;
