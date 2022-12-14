import Head from "next/head"
import Script from "next/script"


import '../src/styles/LDC/flow.css'
import '../src/styles/LDC/blocks.css'
import '../src/styles/LDC/layers.css'
import '../src/styles/LDC/bg.css'


import '../src/styles/blocks/header.css'
import '../src/styles/blocks/controls.css'
import '../src/styles/blocks/display.css'
import '../src/styles/blocks/results.css'


import '../src/styles/details/graph.css'
import '../src/styles/details/pair.css'
import '../src/styles/details/slider.css'
import '../src/styles/details/button.css'

import "../src/styles/reusable/note.css"

import '../src/styles/major.css'
import '../src/styles//home/home.css'






const MyApp = ({ Component, pageProps }) => {

    return (
    
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Head>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SYQLMD869K"/>


  
    
    <Component {...pageProps} />
    
    </>
    )
  }
  export default MyApp