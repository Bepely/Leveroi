import "../styles/blocks/results.css"
import html2canvas from 'html2canvas';

import {useRef} from "react"

const Results = ({close, setClose, open, setOpen, init, _setInit}) => {

    const snap = useRef()

    const onSnap = async () => {
      const element = snap.current;
      const canvas = await html2canvas(element, {backgroundColor: null});
  
      const data = canvas.toDataURL('image/png');
      const link = document.createElement('a');
  
      if (typeof link.download === 'string') {
        link.href = data;
        link.download = `Leveroi ${close.long ? "Long" : "Short"} • by Bepely`;
  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(data);
      }
    }
  const resultStages = [
    "🤡","😰", "💥", "🔥", "⚡", "🌠",
    "🎰",
      "🌟", "🐗", "✨", "🌚", "🏆", "🤡" ]


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
    
  <div  id='reactiveResultsContainer' >
        {close.long === true 
          ? 
          <div className="backLayer2 dropShadow containerBox" id='reactiveResults' ref={snap}>
            <div className="openResults exactResults" >
             
              <div className="orderData">
              <div id="openInfo">
                <h4>Bid:{open.amount*open.leverage}</h4>
                <h5>Amount:{open.amount}</h5>
                <h5>Leverage:{open.leverage}</h5>
              </div>
                <div id="liquidation">
                  <h5>💥 <br/> {(Number(open.price)-Number(open.price/open.leverage)).toFixed(2)}</h5>
                </div>
            </div>
              
            
              
            </div>

            <div className="closeResults exactResults">
            <div id="orderTitle">
               <p>{comment}</p>
               <h3 id="resultsHeader">Long Order</h3>
                 </div> 
                <div className="pnlResults"> 
                  <div className="pnlContainer">
                    <h4>PNL</h4>
                    <h5>{longResults.margin}</h5>
                    <h5>{longResults.marginPercent}%</h5>
                  </div>
                  <div className="totalContainer">
                    <h4>Total</h4>
                    <h5>{longResults.total}</h5>
                  </div>
                  
                </div>
            </div>
            <div className="priceHolder">
              <h5>Entry:{Number(open.price).toFixed(2)}</h5>
              <h5>Close:{Number(close.closePrice).toFixed(2)}</h5>
            </div>
          </div>
          :
          <div className="backLayer2 dropShadow containerBox" id='reactiveResults' ref={snap}>
           <div className="openResults">
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
               <div id="orderTitle">
               <p>{comment}</p>
               <h3 id="resultsHeader">Short Order</h3>
                 </div> 
                <div className="pnlResults"> 
                <div className="pnlContainer">
                    <h4>PNL</h4>
                    <h5>{shortResults.margin}</h5>
                    <h5>{shortResults.marginPercent}%</h5>
                  </div>
                  <div className="totalContainer">
                    <h4>Total</h4>
                    <h5>{shortResults.total}</h5>
                  </div>

                 
                </div>
            </div>
            <div className="priceHolder">
              <h5>Entry:{Number(open.price).toFixed(2)}</h5>
              <h5>Close:{Number(close.closePrice).toFixed(2)}</h5>
            </div>
          </div>
    
        }
        <div id="btnsHolder">
        <button className='crButton defButton dropShadow' onClick={onSnap}>Make a Snap</button>
        <button className='crButton defButton dropShadow' onClick={_setInit}> Configurate new order</button>
       </div>
       </div>
     
     
     </div>
                    
  )
        
 
  
}

Results.defaultProps = {
  close:{
    closePrice: 420,
    max: 1337,
    min: 322,
    long: true
  },
  open:{
    amount: 420,
    leverage: 69,
    price: 1337
  },
  init: true
}

export default Results