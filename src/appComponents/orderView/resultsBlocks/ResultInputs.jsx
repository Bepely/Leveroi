import React from 'react'
import { useState } from 'react'
import * as lcl from "../../../lcl"
import html2canvas from 'html2canvas';


import { useSelector, useDispatch } from 'react-redux'
import { setDefaultClose, setLim0 } from '../../../redux/features/closeOrder/closeOrderSlice';
import {setInitFalse, setInitTrue, setIsQueFalse, setIsQueTrue, setInDisFalse, setInDisTrue} from "../../../redux/features/session/sessionSlice"

const ResultInputs = ({snap, subSwitch}) => {

  const {openOrder} = useSelector(state => state);
  const {closeOrder} = useSelector(state=>state);

  const dispatch = useDispatch()

    /*
    This is an Interface that provides user to share current order or to configure a new one. 
    Also there is an ugly generated URL, that i want to switch to "Help Notes"
    
    But for now it's alright

    12.12.2022 Bepely
    */

    const [shareSwitch, useShareSwitch] = useState(false)


    const shareClick = () => {useShareSwitch(shareSwitch => !shareSwitch)}

  let orderConfigParams = "";

  orderConfigParams = `?am=${openOrder.amount}&lev=${openOrder.leverage}&op=${openOrder.price}&fee=${openOrder.fee}&long=${closeOrder.long}&cp=${closeOrder.price}&min=${closeOrder.min}&max=${closeOrder.max}&lim0=${closeOrder.lim0}&lim1=${closeOrder.lim1}`

const getEncodedConfigParams = () => {return encodeURIComponent(`https://bepely.space/leveroi${orderConfigParams}`)}
const getDecodedConfigParams = (p) => {return decodeURIComponent(p)}

 const onCopy = () => {
   navigator.clipboard.writeText(`https://bepely.space/leveroi${orderConfigParams}`).then(() => {
  
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
          link.download = `Leveroi ${closeOrder.long ? "Long" : "Short"} Order`;
  
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            
  
          
        } else {
          window.openOrder(data);
        }
      }
  
    



  return (
    <div className='layerBase nested multiVer' id='layerBaseFooterResults'> 
    {shareSwitch ? <div className='multiHor layerTable' id='blockButton3'>
    <a  target="_blank" href={`https://t.me/share/url?url=${getEncodedConfigParams()} 
&text=I am sharing ${closeOrder.long ? "Long" : "Short"} order simulation with ${lcl.margin(openOrder, closeOrder)} profit || Made with Leveroi`
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
      <a onClick={()=>{
        dispatch(setDefaultClose());
        dispatch(setInitFalse());
        }}> Configurate new order</a>
}
 </div>
 </div>
  )
}

export default ResultInputs