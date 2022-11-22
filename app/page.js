 import Point from "../src/homeComponents/Point"

import '../src/styles/home.css'


export default (()=>{

    
return <div className="backLayer1" id="homeRoot">
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
        article={"By clicking “Make a Snap” you will download a snap or the Results Display to your device. You can share it wherever you want, from text chats to your tinder account. "}
        action={"Try Leveroi"}
        link={"/app"}
        type={"result"}
        emoji={"🤝"}
        />
        
        
        <footer>
            <h5>Leveroi is in beta. Feeel free to repot on bugs.</h5>
            <h5>bepely.contact@gmail.com</h5>
            <div id="socials">
                <a href="https://www.youtube.com/@Bepely">
                    <p>YouTube</p>
                </a>
                <a href="https://github.com/Bepely">
                    <p>GitHub</p>
                </a>
                <a href="https://tiktok.com/@bepely7">
                    <p>TikTok</p>
                </a>
            </div>
          
        </footer>
</div>
})