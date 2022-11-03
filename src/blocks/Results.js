import "../styles/blocks/results.css"

const Results = ({close, setClose, open, setOpen, init, _setInit}) => {

  const resultStages = [
    "Trader not a Gambler🤡","You are done😰", "Liquidated💥", "Almost Liquidated🔥", "Oh⚡", "Wrong way!🌠",
    "🎰🎰🎰",
      "That way!🌟", "Now we talking🐗", "Doubling✨", "To the Moon!🌚", "Feels good🏆", "Trader not a Gambler🤡" ]


  let longResults = {
        margin: 0,
        marginPercent: 0,
        total: 0
  }

    let shortResults = {
        margin: 0,
        marginPercent: 0,
        total: 0
    }
    

    const longShortChange = () => {
      setClose(close => close.long === true
                  ?({...close, long: false})
                  :({...close, long: true}))
  }
  let comment = resultStages[6]

  const commentSelection = () => {
    let asignee
    if (close.long === true) {asignee = longResults.marginPercent} else if (close.long === false) {asignee = shortResults.marginPercent}

    if (asignee <= -1500)    {comment = resultStages[0]}
    else if(asignee <= -500) {comment = resultStages[1]}
    else if(asignee <= -100) {comment = resultStages[2]}
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
      
    
  
  


    longResults.margin = Number((((1/close.closePrice)-(1/open.price))*(close.closePrice * -1)*open.value)).toFixed(2)
    longResults.total = (Number(longResults.margin) + Number(open.amount)).toFixed(2)
    longResults.marginPercent = (longResults.margin*100/open.amount).toFixed(2)

    shortResults.margin = Number((((1/open.price)-(1/close.closePrice))*(open.value * -1)*close.closePrice)).toFixed(2)
    shortResults.total = (Number(shortResults.margin) + Number(open.amount)).toFixed(2)
    shortResults.marginPercent = (shortResults.margin*100/open.amount).toFixed(2)

    commentSelection()
    

  
 

  
  
 return (
   
  <div className="resultControls" id="results">
  <div  id='reactiveResultsContainer'>
  <div id="comment"><p>{comment}</p></div>
        {close.long === true 
          ? 
          <div id='reactiveResults'>
            <div className="openResults exactResults">

              <div className="longShortBtnHolder">
                <button className={"btn picked greenButton"} disabled={true} onClick={longShortChange}>LONG</button>
                <button className={"btn toPick redButton"} onClick={longShortChange}>SHORT</button>
               </div>

             
              <div className="orderData">
              <div id="openInfo">
                <h4>Bid:{open.amount*open.leverage}</h4>
                <h5>Amount:{open.amount}</h5>
                <h5>Leverage:{open.leverage}</h5>
              </div>
                <div id="liquidation">
                  <h5>💥 <br/> {Number(open.price-(open.price/open.leverage).toFixed(2))}</h5>
                </div>
            </div>
              
            
              
            </div>

            <div className="closeResults exactResults">
                <h3 id="resultsHeader">Long Order Results</h3>
                <div className="pnlResults"> 
                  <h5 >PNL:{longResults.margin} {longResults.marginPercent}%</h5>
                  <h4>Total:{longResults.total}</h4>
                </div>
            </div>
            <div className="priceHolder"><h5>Entry Price:{Number(open.price).toFixed(2)}</h5></div>
            <div className="priceHolder"> <h5>Close Price:{Number(close.closePrice).toFixed(2)}</h5></div>
          </div>
          :
          <div id='reactiveResults'>
           <div className="openResults">
            <div className="longShortBtnHolder">

            <button className={"btn btnToPick greenButton"} onClick={longShortChange}>LONG</button>
            <button className={"btn btnPicked redButton"} disabled={true} onClick={longShortChange}>SHORT</button>
            </div>
            <div className="orderData">
            <div id="openInfo">
                <h4>Bid:{open.amount*open.leverage}</h4>
                <h5>Amount:{open.amount}</h5>
                <h5>Leverage:{open.leverage}</h5>
              </div>
                <div id="liquidation">
                  <h5>💥 <br/> {(Number(open.price)+Number(open.price/open.leverage)).toFixed(2)}</h5>
                </div>
            </div>
            </div>

            <div className="closeResults">
                <h3 id="resultsHeader">Short Order Results</h3>
                <div className="pnlResults"> 
                  <h5 >PNL: {shortResults.margin} {shortResults.marginPercent}%</h5>
                  <h4>Total : {shortResults.total}</h4>
                 
                </div>
            </div>
            <div className="priceHolder"><h5>Entry Price: {Number(open.price).toFixed(2)}</h5></div>
            <div className="priceHolder"> <h5>Close Price: {Number(close.closePrice).toFixed(2)}</h5></div>
          </div>
    
        }
        
        <button className='crButton defButton' onClick={_setInit}> configurate new order</button>
     </div>
     
     </div>
                    
  )
        
 
  
}

Results.defaultProps = {
  close:{
    closePrice: 420,
    max: 1337,
    min: 322
  }
}

export default Results