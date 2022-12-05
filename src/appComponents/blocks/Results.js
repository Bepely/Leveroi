
import html2canvas from 'html2canvas';

import {useRef, useState} from "react"
import * as lcl from "../../lcl"

import Note from "../reusable/Note"

const Results = ({close, setClose, open, setOpen, init, _setInit}) => {

  const [shareSwitch, useShareSwitch] = useState(false)
  const shareClick = () => {useShareSwitch(shareSwitch => !shareSwitch)}

  let orderConfigParams = "";

  orderConfigParams = `?am=${open.amount}&lev=${open.leverage}&op=${open.price}&fee=${open.fee}&long=${close.long}&cp=${close.price}&min=${close.min}&max=${close.max}`

const getEncodedConfigParams = () => {return encodeURIComponent(`https://bepely.space/app${orderConfigParams}`)}
const getDecodedConfigParams = (p) => {return decodeURIComponent(p)}

 const onCopy = () => {
   navigator.clipboard.writeText(`https://bepely.space/app${orderConfigParams}`).then(() => {
  
  }, (err) => {
  console.error('Could not copy text || ', err);
  });
 }

    const snap = useRef()

    const onSnap = async () => {
      

      const element = snap.current;
      const canvas = await html2canvas(element, {backgroundColor: null});
  
      const data = canvas.toDataURL('image/png');
      const link = document.createElement('a');

     
  
      if (typeof link.download === 'string') {
        
        link.href = data;
        link.download = `Leveroi ${close.long ? "Long" : "Short"}`;

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
   
  <>

    
  <div  id='reactiveResultsContainer' >
        
          
          <div className="backLayer2 dropShadow containerBox" id='reactiveResults' ref={snap}>
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
                  <div className="pnlContainer">
                    <h4>PNL</h4>
                    <h5>{lcl.margin(open, close)}</h5>
                    <h5>{lcl.marginPercent(open, close)}%</h5>
                  </div>
                  <div className="totalContainer">
                    <h4>Total</h4>
                    <h5>{lcl.total(open, close)}</h5>
                  </div>
                  
                </div>
            </div>
            <div className="priceHolder">
              <h5>Entry:{lcl.fixCoef(open.price)}</h5>
              <h5>Close:{lcl.fixCoef(close.price)}</h5>
            </div>
          </div>
        
        <div id='shareHolderContainer'>
          <div id='shareHolder'>
            <input type="text" readOnly value={"https://bepely.space/app"+orderConfigParams}/>
          </div>
          {shareSwitch ? <div id='hiddenShareButtonsHolder'>
          <a className='crButton defButton dropShadow shareBtn' id="shareBtnTG" target="_blank" href={`https://t.me/share/url?url=${getEncodedConfigParams()} 
&text=I am sharing ${close.long ? "Long" : "Short"} order simulation with ${lcl.margin(open, close)} profit || Made with Leveroi`
        }> Telegram </a>  
        <button className='crButton defButton dropShadow shareBtn' id="shareBtnSnap" onClick={onSnap}> Make a Snap </button> 
        <button className='crButton defButton dropShadow shareBtn' id="shareBtnCopy" onClick={onCopy}> Copy URL </button> 
          </div>
          :
          <></>
          }
        <div id="btnsHolder">          
                
          
        <button className='crButton defButton dropShadow' onClick={shareClick}> {!shareSwitch ? "Share 👀" : "Hide Share"}</button>
        <button className='crButton defButton dropShadow' onClick={_setInit}> Configurate new order</button>
       </div>
       </div>
       </div>
     
       </>
                    
  )
        
 
  
}

Results.defaultProps = {
  close:{
    price: 420,
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