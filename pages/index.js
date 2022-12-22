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
      content="On this page, you'll find projects I've built from scratch andinformation about me. With experience in React, Svelte, and web3js, I have the skills and expertise to bring your vision to life. Take a look around and don't hesitate to get in touch if you have any questions or would like to discuss a potential project."
    />
    <meta name="keywords" content="Web development, web design, front-end development, back-end development, web3 technology, React, Svelte, JavaScript, HTML, CSS, responsive design, user experience" />

    <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />


    <link rel="icon" href="logo.svg" type="image/icon type" />
    <title>Bepely | Portfolio</title>

      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
        <header className="layerBase multiHor">  
                  
                        <div className="soloCenter vhMax"><h1>Bepely</h1> </div>

                    <div className="multiHor whMax" id="logoHeaderPC">

                   
                    {currentPoint === 0 
                    ?   <h3>Click on points to explore</h3>  :
                    currentPoint === 1
                    ? <h3>Peersonal info, Resume and Details </h3> :
                    currentPoint === 2
                    ? <div className="multiHor"><img src="logo.svg" alt=""id="homeHeaderLogo" /><h3>My React Learning Project</h3></div>:
                      <h3>My Web3 Learning Project</h3> }
                    


                    </div>

                    <div className="multiHor" id="logoHeaderMOB"> 
                    {currentPoint === 0 
                    ?   <h1>💻</h1>:
                    currentPoint === 1
                    ? <h1>📜</h1> :
                    currentPoint === 2
                    ? <img src="logo.svg" alt=""id="homeHeaderLogo" />:
                      <h1>🚧</h1> }
                    </div>
                
                
        </header>




        <Point 
        side={"left"} 
        header={"About"}
        text={"A brief overview of my background"}
        article={"My name is Nikolay Gogin and I am a web developer with experience in React and Svelte. I am also currently learning web3js and I am actively seeking new job opportunities to bring my skills and enthusiasm to a new team. Feel free to browse my projects and get in touch with any questions."}
        emoji={"📜"}
        id={1}
        currentPoint = {currentPoint}
        setCurrentPoint = {setCurrentPoint}
        />
        
        <Point 
        side={"right"} 
        header={"Leveroi"}
        text={"Perpetual options trading simulator"}
        article={"Open source tool that helps traders learn about and test their futures trading strategies. With Leveroi, you can simulate buying and selling futures contracts in a simulated market environment, and see how your trades would have performed."}
        emoji={"📈📉"}
        id={2}
        destination={"/leveroi"}
        currentPoint = {currentPoint}
        setCurrentPoint = {setCurrentPoint}
        />

        <Point 
        side={"left"} 
        header={"Web3 Project"}
        text={"A project in the preparement stage"}
        article={"The web3 project is currently in the preparement stage, which means that I am still in the process of planning and organizing the project. There isn't much to see right now =c. Stay tuned for updates and check back soon to see what we have in store."}
        emoji={"🚧"}
        id={3}
        currentPoint = {currentPoint}
        setCurrentPoint = {setCurrentPoint}
        />
        
        
        <footer>
            <h5>Feel free to contact me for any particular reason</h5>
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