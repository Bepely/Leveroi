import React from 'react'
import "../styles/pair.css"


const Pair = ({type, first, second, subState, setSubState}) => { 
 
    let onChange = (e) => {
        console.log(subState[first]);
        setSubState(subState => ({...subState, [first]:e.target.value})) 
    }

  return (
    <div className='pairHolder container reuse' id={type+"-"+first+"-"+second}>
       {type === "input"
        ?    
            <div className='inputPair pair'>
                 <p className='pairFirst pairText pairChild hText'>{first}</p>  
                 <input className='pairSecond pairChild pairInput' 
                 type="text" name={second} id={second} placeholder={second} 
                 value={subState[first]} onChange={onChange}/> 
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