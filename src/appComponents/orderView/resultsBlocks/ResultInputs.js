import React from 'react'
import { useState } from 'react'
import * as lcl from "../../../lcl"
import html2canvas from 'html2canvas';

const ResultInputs = ({open, close, snap, _setInit, subSwitch}) => {

    /*
    This is an Interface that provides user to share current order or to configure a new one. 
    Also there is an ugly generated URL, that i want to switch to "Help Notes"
    
    But for now it's alright

    12.12.2022 Bepely
    */

    const [shareSwitch, useShareSwitch] = useState(false)


    const shareClick = () => {useShareSwitch(shareSwitch => !shareSwitch)}

  let orderConfigParams = "";

  orderConfigParams = `?am=${open.amount}&lev=${open.leverage}&op=${open.price}&fee=${open.fee}&long=${close.long}&cp=${close.price}&min=${close.min}&max=${close.max}&lim0=${close.lim0}&lim1=${close.lim1}`

const getEncodedConfigParams = () => {return encodeURIComponent(`https://bepely.space/app${orderConfigParams}`)}
const getDecodedConfigParams = (p) => {return decodeURIComponent(p)}

 const onCopy = () => {
   navigator.clipboard.writeText(`https://bepely.space/app${orderConfigParams}`).then(() => {
  
  }, (err) => {
  console.error('Could not copy text || ', err);
  });
 }


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
  
    



  return (
    <div className='layerBase nested multiVer' id='layerBaseFooterResults'> 
    {shareSwitch ? <div className='multiHor layerTable' id='blockButton3'>
    <a  target="_blank" href={`https://t.me/share/url?url=${getEncodedConfigParams()} 
&text=I am sharing ${close.long ? "Long" : "Short"} order simulation with ${lcl.margin(open, close)} profit || Made with Leveroi`
  }> Telegram </a>  
    
      <a onClick={onSnap}> Make a Snap </a> 
      <a onClick={onCopy}> Copy URL </a> 
   
    </div>
    :
    <></>
    }
  <div className="multiHor layerTable" id="blockButton2">          
          
    
  <a onClick={shareClick}> Share</a>
  {subSwitch.switch ? 
      <a onClick={_setInit}> Configurate chain order</a>
    
      :
      <a onClick={_setInit}> Configurate new order</a>
}
 </div>
 </div>
  )
}

export default ResultInputs