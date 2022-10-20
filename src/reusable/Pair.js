import React from 'react'
import "../styles/pair.css"
import { useContext } from 'react'

import { configContext } from "../configContext"

const Pair = ({type, first, second, target}) => {
    const { config, setConfig } = useContext(configContext) 
 
    let onChange = (e) => {
        console.log(e.target.value);
        setConfig(config => ({...config, [first]:e.target.value})) 
       
    }

  return (
    <div className='pairHolder container reuse' id={type+"-"+first+"-"+second}>
       {type === "input"
        ?    
            <div className='inputPair pair'>
                 <p className='pairFirst pairText pairChild hText'>{first}</p>  
                 <input className='pairSecond pairChild pairInput' type="text" name={second} id={second} placeholder={second} onChange={onChange}/> 
            </div>
        :
        type === "inform"
        ?
            <div className='inputPair pair'>
                <p className='pairFirst pairChild hText'>{first}</p>  
                <p className='pairSecond pairChild hText'>{second}</p>  
            </div>
       :
            <div className='inputPair pair'>
                <p className='pairChild hText'>PAIR ERROR| FIRST:{first} | SECOND:{second} | TYPE: {type}</p>  
            </div>
       }
    </div>
  )
}



Pair.defaultProps = {
    type: "text-text",
    first: "NOT",
    second: "DEFINED"
}

export default Pair