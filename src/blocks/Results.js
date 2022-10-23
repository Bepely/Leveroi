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
            <div>
              <button onClick={longShortChange}>LONG</button>
              <div>
                <h4>{longResults.margin}</h4>
                <h5>{longResults.marginPercent}%</h5>
              </div>
            </div>
            <div>
              <h4>Total : {longResults.total}</h4>
            </div>
          </div>
          :
          <div id='reactiveResults'>
            <div>
            <button onClick={longShortChange}>SHORT</button>
              <div>
                <h4>{shortResults.margin}</h4>
                <h5>{shortResults.marginPercent}%</h5>
              </div>
              
            </div>
            <div>
              <h4>Total : {shortResults.total}</h4>
            </div>
          </div>
    
        }
     </div>
     </div>
                    
  )
        
 
  
}

export default Results