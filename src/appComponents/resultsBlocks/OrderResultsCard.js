import React from 'react'
import * as lcl from "../../lcl"

const OrderResultsCard = ({open, close, snap}) => {


    /*
    This Blocks provides A result Block, that is showing reactive outecomes of an Order
    Also it Have Coment generator, that in my opiniun looks ugly and optimised too bad

    I am concidering to get rid of it =/

    Bepely 12.12.2022
    */




    const resultStages = [
        "🤡","😰", "💥", "🔥", "⚡", "🌠",
        "🎰",
          "🌟", "🐗", "✨", "🌚", "🏆", "🤡" ]
      let comment = resultStages[6]
    
      const commentSelection = () => {
        let asignee
        
    
        asignee = lcl.marginPercent(open, close)
    
        if (asignee <= -1500)    {comment = resultStages[0]}
        else if(asignee <= -500) {comment = resultStages[1]}
        else if(asignee <= open.fee-100) {comment = resultStages[2]}
        else if(asignee <= -80)  {comment = resultStages[3]}
        else if(asignee <= -40)  {comment = resultStages[4]}
        else if(asignee <= -5)   {comment = resultStages[5]}
    
        else if(asignee <= 5 && asignee >= -5) {comment = resultStages[6]}
    
        else if(asignee >= 1500) {comment = resultStages[12]}
        else if(asignee >= 500)  {comment = resultStages[11]}
        else if(asignee >= 100)  {comment = resultStages[10]}
        else if(asignee >= 80)   {comment = resultStages[9]}
        else if(asignee >= 40)   {comment = resultStages[8]}
        else if(asignee >= 5)    {comment = resultStages[7]}
        }
    
      commentSelection()







  return (
    
        
          
          <div className="layerFloor" ref={snap} id='resultsFloor' >
            <div className="openResults exactResults" >
             
              <div className="orderData">
              <div id="openInfo">
                <h4>Bid:{open.amount * open.leverage}</h4>
                <h5>Amount:{open.amount}</h5>
                <h5>Leverage:{open.leverage}</h5>
                <h5>{open.fee && open.fee !== 0 ? "Fee:" + open.fee + "%" : "No Fee"}</h5>
              </div>
                <div id="liquidation">
                  <h5>💥 <br/> {lcl.liquidation(open, close)}</h5>
                </div>
            </div>
              
            
              
            </div>

            <div className="closeResults exactResults">
            <div id="orderTitle">
               <p>{comment}</p>
               <h3 id="resultsHeader">{close.long ? "Long Order" : "Short Order"}</h3>
                 </div> 
                <div className="pnlResults"> 
                  <div className="pnlContainer" id='textContent'>
                    <h4>PNL</h4>
                    <h5>{lcl.margin(open, close)}</h5>
                    <h5>{lcl.marginPercent(open, close)}%</h5>
                  </div>
                  <div className="totalContainer" id='textContent'>
                    <h4>Total</h4>
                    <h5>{lcl.total(open, close)}</h5>
                  </div>
                  
                </div>
            </div>
            <div className="priceHolder" id="textContent">
              <h5>Entry:{lcl.fixCoef(open.price)}</h5>
              <h5>Close:{lcl.fixCoef(close.price)}</h5>
            </div>
          </div>
        
    
  )
}

export default OrderResultsCard