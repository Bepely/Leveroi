const Results = ({close, setClose, open, setOpen, init}) => {

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

    longResults.margin = Number((((1/close.closePrice)-(1/open.price))*(close.closePrice * -1)*open.value)).toFixed(2)
    longResults.total = (Number(longResults.margin) + Number(open.amount)).toFixed(2)
    longResults.marginPercent = (longResults.margin*100/open.amount).toFixed(2)

    shortResults.margin = Number((((1/open.price)-(1/close.closePrice))*(open.value * -1)*close.closePrice)).toFixed(2)
    shortResults.total = (Number(shortResults.margin) + Number(open.amount)).toFixed(2)
    shortResults.marginPercent = (shortResults.margin*100/open.amount).toFixed(2)
  
  
  
 return (
   
  <div id="results">
  <div  id='reactiveResultsContainer'>

    
        {close.long === true 
          ? 
          <div id='reactiveResults'>
            <div className="openResults">

              <div className="longShortBtnHolder">
                <button className={"btn picked"} disabled={true} onClick={longShortChange}>LONG</button>
                <button className={"btn toPick"} onClick={longShortChange}>SHORT</button>
               </div>

              <div>
                <h4>Open opder</h4>
                <h5>Amount: {open.amount}</h5>
                <h5>Leverage: {open.leverage}</h5>
              </div>
            
              
            </div>

            <div className="closeResults">
                <h3 id="resultsHeader">Results</h3>
                <div className="pnlResults"> 
                  <h5 style={{color: "#22DDAA"}}>PNL: {longResults.margin} {longResults.marginPercent}%</h5>
                  <h4>Total : {longResults.total}</h4>
                  <p>COMMENT</p>
                </div>
            </div>
            <div className="priceHolder"><h5>Entry Price: {open.price}</h5></div>
            <div className="priceHolder"> <h5>Close Price: {close.closePrice}</h5></div>
          </div>
          :
          <div id='reactiveResults'>
           <div className="openResults">
            <div className="longShortBtnHolder">

            <button className={"btn btnToPick"} onClick={longShortChange}>LONG</button>
            <button className={"btn btnPicked"} disabled={true} onClick={longShortChange}>SHORT</button>
            </div>
            <div>
                <h4>Open opder</h4>
                <h5>Amount: {open.amount}</h5>
                <h5>Leverage: {open.leverage}</h5>
            </div>
            </div>

            <div className="closeResults">
                <h3 id="resultsHeader">Results</h3>
                <div className="pnlResults"> 
                  <h5 style={{color: "#DD22AA"}}>PNL: {shortResults.margin} {shortResults.marginPercent}%</h5>
                  <h4>Total : {shortResults.total}</h4>
                  <p>COMMENT</p>
                </div>
            </div>
            <div className="priceHolder"><h5>Entry Price: {open.price}</h5></div>
            <div className="priceHolder"> <h5>Close Price: {close.closePrice}</h5></div>
          </div>
    
        }
     </div>
     </div>
                    
  )
        
 
  
}

export default Results