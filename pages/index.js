
import Point from "../src/homeComponents/Point"
import Head from "next/head"




export default (()=>{

    
return <div className="backLayer1" id="homeRoot">
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
        <div className="sectionHome" id="headerHome">
            <header>
                <div>
                <h1>Leveroi</h1>
                <h3>Order profit calculator</h3>
                </div>
                <div id="useApp" className="backLayer2">
                <a href="/app"><h5>use app</h5></a>
                </div>
            </header>
        </div>
        <Point 
        side={"left"} 
        header={"Easy ROI"}
        text={"Calculate the potential return of your futures orders is easy."}
        article={"Input amount, leverage and price of an open order, then Leveroi will provide you with an intuitive interface to simulate market moves and the dynamic results of your order."}
        action={"Try Leveroi"}
        link={"/app"}
        type={"config"}
        emoji={"🍰"}
        />
        
        <Point 
        side={"right"} 
        header={"Dynamic"}
        text={"Simulate price moves and get dynamic results of your order."}
        article={"Leveroi provides you with an easy and fast way to simulate price moves and get dynamic results of your order. Change Long or Short positions without creating new orders, and see how it will affect your outcomes."}
        action={"Try Leveroi"}
        link={"/app"}
        type={"graph"}
        emoji={"🌊"}
        />

        <Point 
        side={"left"} 
        header={"Share Results"}
        text={"It is easy to save and share order simulation results. "}
        article={"Share your simulation with a variety of options: Copy the URL to your clipboard, download a screenshot of the results on your device, or share the link on Telegram. The order will be recreated by clicking the generated link."}
        action={"Try Leveroi"}
        link={"/app"}
        type={"result"}
        emoji={"🤝"}
        />
        
        
        <footer>
            <h5>Leveroi is in beta. Feeel free to repot on bugs.</h5>
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
})