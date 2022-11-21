 import Point from "../src/homeComponents/Point"

import '../src/styles/home.css'


export default (()=>{

    
return <div className="backLayer1" id="homeRoot">
        <div className="sectionHome" id="headerHome">
            <header>
                <h1>Leveroi</h1>
                <h3>Order profit calculator</h3>
                <a href="/app"><h5>use app</h5></a>

            </header>
        </div>
        <Point 
        side={"left"} 
        header={"Easy ROI"}
        article={"With Leveroi you can know your order outcomes easy and fast."}
        action={"Use App"}
        link={"/app"}
        type={"config"}
        />
        
        <Point 
        side={"right"} 
        header={"Dynamic"}
        article={"Simulate close price and see outcomes on graph and display."}
        action={"Use App"}
        link={"/app"}
        type={"graph"}
        />

<Point 
        side={"left"} 
        header={"Share Outcomes"}
        article={"With Leveroi you can snap simulated order, save and share it."}
        action={"Use App"}
        link={"/app"}
        type={"result"}
        />
        
        
        <footer>
            footer
        </footer>
</div>
})