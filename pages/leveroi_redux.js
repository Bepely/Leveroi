'use client'
import Head from "next/head"
import React from 'react'

import {Provider} from "react-redux"
import store from "../src/redux/store/store"

const leveroi_redux = () => {
  return (
    <Provider store={store}>
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



    <p>{store.value}</p>
      
      

    </div>
    </Provider>
  )
}

export default leveroi_redux