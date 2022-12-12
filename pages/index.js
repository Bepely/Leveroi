'use client'
import Point from "../src/homeComponents/Point"
import Head from "next/head"


import {useState} from 'react'


export default (()=>{

    const [currentPoint, setCurrentPoint] = useState(0)


    
return <div className="layerGround soloCenter">
    <div className="layerBase multiVer">
    <Head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta
      name="description"
      content="Home Page of the Leveroi project made by Bepely. Here you can find information about Leveroi app and instructions to use it."
    />
    <meta name="keywords" content="Profit, Loss, Calculator, Roi, Futures, Leverage, Order"/>
    <meta name="google-site-verification" content="R432kLJXvfXUt9dWFETX7b_PQpgkOuhY5SEbo-PmVx0" />


    <link rel="icon" href="logo.svg" type="image/icon type" />
    <title>Leveroi Home</title>

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <header className="layerBase multiHor" id="homeHeaderBase">  

                <div className="multiHor" id="homeHeaderLogoText">
                    <div className="multiHor" id="logoHeaderMOB"> 
                    {currentPoint === 0 
                    ?  <img src="logo.svg" alt=""id="homeHeaderLogo" />:
                    currentPoint === 1
                    ? <h1>💸</h1> :
                    currentPoint === 2
                    ? <h1>✍️</h1>:
                      <h1>👨‍💻</h1> }
                    </div>

                    <div className="multiHor" id="logoHeaderPC">
                     <img src="logo.svg" alt=""id="homeHeaderLogo" />
                    </div>
                        <h1>Leveroi</h1> 
                    </div>
                
                
                
                    <a href="./app" className='layerFloor blockCard soloCenter' id='headerBlock'><h4>Use app</h4></a>
                
        </header>


        <Point 
        side={"left"} 
        header={"Order returns"}
        text={"Calculate the potential return of your futures orders is easy."}
        article={"Leveroi is an app that helps traders learn about and test their futures trading strategies. With Leveroi, you can simulate buying and selling futures contracts in a simulated market environment, and see how your trades would have performed."}
        emoji={"📈📉"}
        id={1}
        currentPoint = {currentPoint}
        setCurrentPoint = {setCurrentPoint}
        />
        
        <Point 
        side={"right"} 
        header={"Handy"}
        text={"Try dynamic, handy tools to test trading strategies."}
        article={"Leveroi features a reactive graph that updates due to closed order, a results display that shows your profits or losses, and a share functionality that lets you share your simulated trades with others."}
        emoji={"✍️"}
        id={2}
        currentPoint = {currentPoint}
        setCurrentPoint = {setCurrentPoint}
        />

        <Point 
        side={"left"} 
        header={"Open source"}
        text={"Leveroi is open source, so anyone can view, modify, and contribute to the code."}
        article={"This project is developed by one person, and you are more than welcome to contribute on GitHub, see the development journal on YouTube, or offer me a job. Feel free to contact me for any particular reason."}
        emoji={"👨‍💻"}
        id={3}
        currentPoint = {currentPoint}
        setCurrentPoint = {setCurrentPoint}
        />
        
        
        <footer>
            <h5>Leveroi is in beta. Feel free to repot on bugs.</h5>
            <h5>bepely.contact@gmail.com</h5>
            <div id="socials">
                <a target="_blank" href="https://www.youtube.com/@Bepely">
                    <p>YouTube</p>
                </a>
                <a target="_blank" href="https://github.com/Bepely">
                    <p>GitHub</p>
                </a>
                <a target="_blank" href="https://tiktok.com/@bepely7">
                    <p>TikTok</p>
                </a>
            </div>
          
        </footer>
        </div>
</div>
})